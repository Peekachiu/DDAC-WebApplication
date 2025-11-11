using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Http.StatusCodes;
using Microsoft.EntityFrameworkCore;
using static BCrypt.Net.BCrypt;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            // IMPORTANT: In production, replace the 'http://localhost:3000' with your actual frontend domain(s)
            policy.WithOrigins(
                "http://localhost:3000",
                "http://192.168.225.1:3000"
            )
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString,
        ServerVersion.AutoDetect(connectionString)
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors();

app.UseRouting();

app.UseAuthorization();

// [STEP 2: ENABLE CORS MIDDLEWARE] Must be before UseAuthorization/Map...
app.MapControllers();
app.MapRazorPages();

// [STEP 3: ADD LOGIN ENDPOINT]
app.MapPost("/api/auth/login", async ([FromBody] LoginRequest loginData, ApplicationDbContext dbContext) =>
{
    // 1. Find user by email asynchronously in MySQL
    var user = await dbContext.Users
                              .SingleOrDefaultAsync(u => u.Email == loginData.Email);

    // 2. Check if user exists AND verify the password hash using BCrypt
    // The BCrypt.Verify method securely compares the submitted password against the stored hash.
    if (user == null || !Verify(loginData.Password, user.PasswordHash))
    {
        // Failed login
        return Results.Unauthorized();
    }

    // 3. Successful login - map to UserData DTO (Data Transfer Object)
    // IMPORTANT: Never return the PasswordHash field!
    var loggedInUser = new UserData(
        user.Id.ToString(),
        user.Name,
        user.Email,
        user.Unit,
        user.Role,
        // This should be replaced with real JWT generation in the next phase
        "REAL_JWT_TOKEN_GOES_HERE"
    );

    return Results.Ok(loggedInUser);
})

.WithName("Login")
.Produces(Status200OK, typeof(UserData))
.Produces(Status401Unauthorized);

Console.WriteLine(HashPassword("admin"));

app.Run();

// Define the data models for clarity
public record LoginRequest(string Email, string Password);
// Note: In a real app, this should contain a JWT token instead of raw data.
public record UserData(string Id, string Name, string Email, string Unit, string Role, string Token);