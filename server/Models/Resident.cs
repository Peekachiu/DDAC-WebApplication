namespace SmartResidentialApi.Models // Make sure this namespace matches your project name
{
    public class Resident
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? UnitNumber { get; set; }
        public string? PasswordHash { get; set; } // Will store the hashed password
        public string? Role { get; set; } // "Admin" or "Resident"
    }
}