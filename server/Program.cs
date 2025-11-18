using Microsoft.EntityFrameworkCore;
using server.Data; // IMPORT THIS

var builder = WebApplication.CreateBuilder(args);

// 1. CONFIGURE CORS POLICY
var corsPolicyName = "ResidentProCorsPolicy";
var corsOrigins = builder.Configuration.GetSection("CorsOrigins").Get<string[]>() ?? new string[0];

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsPolicyName,
        policy =>
        {
            policy.WithOrigins(corsOrigins)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add services to the container.
builder.Services.AddRazorPages();
// 2. ADD CONTROLLERS FOR API ENDPOINTS
builder.Services.AddControllers(); 

// 3. CONFIGURE MYSQL DB CONTEXT
var connectionString = builder.Configuration.GetConnectionString("ResidentProDb");

builder.Services.AddDbContext<ResidentProDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
// ... (rest of the error handling and HSTS config)
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

// 4. USE CORS POLICY
app.UseCors(corsPolicyName);

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// 5. MAP API CONTROLLERS
app.MapControllers(); 

app.MapRazorPages();

app.Run();