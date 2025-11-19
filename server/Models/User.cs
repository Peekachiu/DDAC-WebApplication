namespace server.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string IdentityNumber { get; set; } = string.Empty;
        public string ContactNumber { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int Role { get; set; } // 0 = Admin, 1 = Resident
        public int PropertyID { get; set; }

        // Navigation property for Login
        public Login? Login { get; set; }
    }
}