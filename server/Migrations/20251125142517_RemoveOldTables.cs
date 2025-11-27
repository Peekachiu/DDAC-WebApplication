using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class RemoveOldTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.Sql("DROP TABLE IF EXISTS event_hall;");
            migrationBuilder.Sql("DROP TABLE IF EXISTS sport_facility;");
            migrationBuilder.Sql("DROP TABLE IF EXISTS venue;");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            
        }
    }
}
