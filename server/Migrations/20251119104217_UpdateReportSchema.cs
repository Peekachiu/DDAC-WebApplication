using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateReportSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "reportImg",
                table: "report");

            migrationBuilder.RenameColumn(
                name: "reportDescription",
                table: "report",
                newName: "type");

            migrationBuilder.AddColumn<string>(
                name: "assignedTo",
                table: "report",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "category",
                table: "report",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "report",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "photoBase64",
                table: "report",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "priority",
                table: "report",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "resolutionNotes",
                table: "report",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "resolvedDate",
                table: "report",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "subject",
                table: "report",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "submittedDate",
                table: "report",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "assignedTo",
                table: "report");

            migrationBuilder.DropColumn(
                name: "category",
                table: "report");

            migrationBuilder.DropColumn(
                name: "description",
                table: "report");

            migrationBuilder.DropColumn(
                name: "photoBase64",
                table: "report");

            migrationBuilder.DropColumn(
                name: "priority",
                table: "report");

            migrationBuilder.DropColumn(
                name: "resolutionNotes",
                table: "report");

            migrationBuilder.DropColumn(
                name: "resolvedDate",
                table: "report");

            migrationBuilder.DropColumn(
                name: "subject",
                table: "report");

            migrationBuilder.DropColumn(
                name: "submittedDate",
                table: "report");

            migrationBuilder.RenameColumn(
                name: "type",
                table: "report",
                newName: "reportDescription");

            migrationBuilder.AddColumn<byte[]>(
                name: "reportImg",
                table: "report",
                type: "longblob",
                nullable: true);
        }
    }
}
