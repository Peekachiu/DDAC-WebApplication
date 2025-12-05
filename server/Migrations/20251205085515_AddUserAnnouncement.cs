using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddUserAnnouncement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user_announcement",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    userID = table.Column<int>(type: "int", nullable: false),
                    announcementID = table.Column<int>(type: "int", nullable: false),
                    isRead = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    isDeleted = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_announcement", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_announcement_announcement_announcementID",
                        column: x => x.announcementID,
                        principalTable: "announcement",
                        principalColumn: "announcementID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_user_announcement_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_user_announcement_announcementID",
                table: "user_announcement",
                column: "announcementID");

            migrationBuilder.CreateIndex(
                name: "IX_user_announcement_userID",
                table: "user_announcement",
                column: "userID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "user_announcement");
        }
    }
}
