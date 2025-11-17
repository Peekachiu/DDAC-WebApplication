using Microsoft.EntityFrameworkCore;
// Make sure this 'Data' namespace matches your project
using server.Data;

var builder = WebApplication.CreateBuilder(args);

// --- 1. Add Database Connection ---
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add the DbContext and tell it to use MySQL
// You must run 'dotnet add package Pomelo.EntityFrameworkCore.MySql'
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// --- 2. Add CORS (CRITICAL for React) ---
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowReactApp",
        policy =>
        {
            // This URL MUST match your React app
            policy.WithOrigins("http://localhost:3000") 
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// --- 3. Add Controllers ---
builder.Services.AddControllers();

// (These are for API documentation)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// --- 4. Use CORS (CRITICAL) ---
app.UseCors("AllowReactApp"); // This line must be here

app.UseAuthorization();

// --- 5. Map Controllers ---
// This tells .NET to use your Controller files (e.g., ResidentsController.cs)
app.MapControllers();

app.Run();