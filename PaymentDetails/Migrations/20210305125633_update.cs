using Microsoft.EntityFrameworkCore.Migrations;

namespace PaymentDetails.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExpirationData",
                table: "PaymentDetails",
                newName: "ExpirationDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExpirationDate",
                table: "PaymentDetails",
                newName: "ExpirationData");
        }
    }
}
