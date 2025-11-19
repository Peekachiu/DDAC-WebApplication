using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddFinancialTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_invoice_paymentID",
                table: "invoice",
                column: "paymentID");

            migrationBuilder.CreateIndex(
                name: "IX_management_fee_propertyID",
                table: "management_fee",
                column: "propertyID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "invoice");

            migrationBuilder.DropTable(
                name: "management_fee");
        }
    }
}
