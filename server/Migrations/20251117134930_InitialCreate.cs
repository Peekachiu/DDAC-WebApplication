using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "property",
                columns: table => new
                {
                    propertyID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    block = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    floor = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    unit = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_property", x => x.propertyID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "venue",
                columns: table => new
                {
                    venueID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    venueImg = table.Column<byte[]>(type: "longblob", nullable: true),
                    venueDescription = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venue", x => x.venueID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "management_fee",
                columns: table => new
                {
                    paymentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    paymentDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    paymentTime = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    amount = table.Column<int>(type: "int", nullable: false),
                    method = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    status = table.Column<int>(type: "int", nullable: false),
                    propertyID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_management_fee", x => x.paymentID);
                    table.ForeignKey(
                        name: "FK_management_fee_property_propertyID",
                        column: x => x.propertyID,
                        principalTable: "property",
                        principalColumn: "propertyID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    userID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    firstName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    lastName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    identityNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    contactNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    role = table.Column<int>(type: "int", nullable: false),
                    propertyID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.userID);
                    table.ForeignKey(
                        name: "FK_user_property_propertyID",
                        column: x => x.propertyID,
                        principalTable: "property",
                        principalColumn: "propertyID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "invoice",
                columns: table => new
                {
                    invoiceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    invoiceDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    invoiceTime = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    amount = table.Column<int>(type: "int", nullable: false),
                    paymentID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_invoice", x => x.invoiceID);
                    table.ForeignKey(
                        name: "FK_invoice_management_fee_paymentID",
                        column: x => x.paymentID,
                        principalTable: "management_fee",
                        principalColumn: "paymentID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "event_hall",
                columns: table => new
                {
                    hBookingID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    bookingDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    startTime = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    duration = table.Column<int>(type: "int", nullable: false),
                    status = table.Column<int>(type: "int", nullable: false),
                    userID = table.Column<int>(type: "int", nullable: false),
                    venueID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_event_hall", x => x.hBookingID);
                    table.ForeignKey(
                        name: "FK_event_hall_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "userID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_event_hall_venue_venueID",
                        column: x => x.venueID,
                        principalTable: "venue",
                        principalColumn: "venueID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "login",
                columns: table => new
                {
                    email = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    userID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_login", x => x.email);
                    table.ForeignKey(
                        name: "FK_login_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "userID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "report",
                columns: table => new
                {
                    reportID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    reportDescription = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    reportImg = table.Column<byte[]>(type: "longblob", nullable: true),
                    reportStatus = table.Column<int>(type: "int", nullable: false),
                    userID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_report", x => x.reportID);
                    table.ForeignKey(
                        name: "FK_report_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "userID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "sport_facility",
                columns: table => new
                {
                    sBookingID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    sportName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    bookingDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    startTime = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    duration = table.Column<int>(type: "int", nullable: false),
                    court = table.Column<int>(type: "int", nullable: false),
                    status = table.Column<int>(type: "int", nullable: false),
                    userID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sport_facility", x => x.sBookingID);
                    table.ForeignKey(
                        name: "FK_sport_facility_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "userID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "visitor",
                columns: table => new
                {
                    visitorID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    visitorName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    visitorContactNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    visitDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    visitTime = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    carPlate = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    status = table.Column<int>(type: "int", nullable: false),
                    userID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_visitor", x => x.visitorID);
                    table.ForeignKey(
                        name: "FK_visitor_user_userID",
                        column: x => x.userID,
                        principalTable: "user",
                        principalColumn: "userID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_event_hall_userID",
                table: "event_hall",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_event_hall_venueID",
                table: "event_hall",
                column: "venueID");

            migrationBuilder.CreateIndex(
                name: "IX_invoice_paymentID",
                table: "invoice",
                column: "paymentID");

            migrationBuilder.CreateIndex(
                name: "IX_login_userID",
                table: "login",
                column: "userID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_management_fee_propertyID",
                table: "management_fee",
                column: "propertyID");

            migrationBuilder.CreateIndex(
                name: "IX_report_userID",
                table: "report",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_sport_facility_userID",
                table: "sport_facility",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_user_propertyID",
                table: "user",
                column: "propertyID");

            migrationBuilder.CreateIndex(
                name: "IX_visitor_userID",
                table: "visitor",
                column: "userID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "event_hall");

            migrationBuilder.DropTable(
                name: "invoice");

            migrationBuilder.DropTable(
                name: "login");

            migrationBuilder.DropTable(
                name: "report");

            migrationBuilder.DropTable(
                name: "sport_facility");

            migrationBuilder.DropTable(
                name: "visitor");

            migrationBuilder.DropTable(
                name: "venue");

            migrationBuilder.DropTable(
                name: "management_fee");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "property");
        }
    }
}
