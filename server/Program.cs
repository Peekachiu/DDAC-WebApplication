using Microsoft.EntityFrameworkCore;
// Make sure this 'Data' namespace matches your project
using server.Data;

var builder = WebApplication.CreateBuilder(args);

// --- 1. Add Database Connection ---
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add the DbContext and tell it to use MySQL
// You must run 'dotnet add package Pomelo.EntityFrameworkCore.MySql'
builder.Services.AddDbContext<ResidentProDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// --- 2. Add CORS (CRITICAL for React) ---
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowReactApp",
        policy =>
        {
            // This URL MUST match your React app
            policy.WithOrigins("http://localhost:3000", "http://192.168.225.1:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// --- 3. Add Controllers ---
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "https://residentpro.click", "http://residentpro.click")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

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
app.UseRouting();
// --- 4. Use CORS (CRITICAL) ---
app.UseCors("AllowReactApp"); // This line must be here
app.UseCors("AllowFrontend");
app.UseAuthorization();

// --- 5. Map Controllers ---
// This tells .NET to use your Controller files (e.g., ResidentsController.cs)
app.MapControllers();

// Health Check Endpoint
app.MapGet("/health", async (ResidentProDbContext db) =>
{
    try
    {
        await db.Database.CanConnectAsync();
        return Results.Ok(new { status = "Healthy", database = "Connected" });
    }
    catch (Exception ex)
    {
        return Results.Json(new { status = "Unhealthy", database = "Disconnected", error = ex.Message }, statusCode: 500);
    }
});

app.Run();