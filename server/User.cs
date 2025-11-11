using System.ComponentModel.DataAnnotations.Schema; // <-- Ensure this is present

public class User
{
    public int Id { get; set; }

    [Column("Name")] // <--- FIX FOR 'Unknown column u.Name'
    public string Name { get; set; }

    public string Email { get; set; }

    [Column("PasswordHash")] // (This was the previous fix, ensure it's here)
    public string PasswordHash { get; set; }

    [Column("Unit")] // <--- FIX FOR 'Unknown column u.Unit'
    public string Unit { get; set; }

    [Column("Role")] // Add for completeness, though it might not be failing yet
    public string Role { get; set; }
}