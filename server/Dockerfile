# --- Stage 1: Build (SDK) ---
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the csproj and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the source code
COPY . .

# Build and Publish
RUN dotnet publish -c Release -o /app/publish

# --- Stage 2: Runtime (The part that was wrong) ---
# CHANGE THIS LINE FROM 8.0 TO 9.0
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app

# Copy the compiled files from the build stage
COPY --from=build /app/publish .

# Expose port 80
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80

# Run the server
ENTRYPOINT ["dotnet", "server.dll"]