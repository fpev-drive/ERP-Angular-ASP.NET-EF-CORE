﻿// <auto-generated />
using ERP.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace ERP.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ERP.API.Models.CreditAccount", b =>
                {
                    b.Property<int>("CreditAccountId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CreditAccountId");

                    b.ToTable("CreditAccounts");
                });

            modelBuilder.Entity("ERP.API.Models.DebitAccount", b =>
                {
                    b.Property<int>("DebitAccountId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("DebitAccountId");

                    b.ToTable("DebitAccounts");
                });

            modelBuilder.Entity("ERP.API.Models.Employee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Created");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<int>("PositionId");

                    b.Property<double>("Salary");

                    b.HasKey("EmployeeId");

                    b.HasIndex("PositionId");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("ERP.API.Models.GeneralLedger", b =>
                {
                    b.Property<int>("TransactionId")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Amount");

                    b.Property<int>("CreditAccountId");

                    b.Property<int>("DebitAccountId");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<DateTime>("Occured");

                    b.HasKey("TransactionId");

                    b.HasIndex("CreditAccountId");

                    b.HasIndex("DebitAccountId");

                    b.ToTable("GeneralLedgers");
                });

            modelBuilder.Entity("ERP.API.Models.Inventory", b =>
                {
                    b.Property<int>("InventoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("AvgCost");

                    b.Property<int>("ItemId");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<int>("QuantityOnHand");

                    b.Property<int>("QuantityOrdered");

                    b.Property<double>("UnitCost");

                    b.HasKey("InventoryId");

                    b.HasIndex("ItemId");

                    b.ToTable("Inventories");
                });

            modelBuilder.Entity("ERP.API.Models.Item", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("LastUpdated");

                    b.Property<string>("Name");

                    b.Property<double>("RetailPrice");

                    b.HasKey("ItemId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("ERP.API.Models.ItemSupplier", b =>
                {
                    b.Property<int>("ItemId");

                    b.Property<int>("SupplierId");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<int>("LeadTime");

                    b.Property<double>("UnitCost");

                    b.HasKey("ItemId", "SupplierId");

                    b.HasIndex("SupplierId");

                    b.ToTable("ItemSuppliers");
                });

            modelBuilder.Entity("ERP.API.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApprovedBy");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<DateTime>("ReceivedDate");

                    b.Property<DateTime>("RequestedDate");

                    b.Property<string>("Status");

                    b.Property<int>("SupplierId");

                    b.Property<double>("TotalCost");

                    b.HasKey("OrderId");

                    b.HasIndex("ApprovedBy");

                    b.HasIndex("SupplierId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ERP.API.Models.OrderItem", b =>
                {
                    b.Property<int>("OrderId");

                    b.Property<int>("ItemId");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<int>("Quantity");

                    b.Property<double>("TotalCost");

                    b.Property<double>("UnitCost");

                    b.HasKey("OrderId", "ItemId");

                    b.HasIndex("ItemId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("ERP.API.Models.Position", b =>
                {
                    b.Property<int>("PositionId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("LastUpdated");

                    b.Property<string>("PositionName");

                    b.HasKey("PositionId");

                    b.ToTable("Positions");
                });

            modelBuilder.Entity("ERP.API.Models.Supplier", b =>
                {
                    b.Property<int>("SupplierId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("City");

                    b.Property<string>("ContactName");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<string>("Name");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Status");

                    b.HasKey("SupplierId");

                    b.ToTable("Suppliers");
                });

            modelBuilder.Entity("ERP.API.Models.Employee", b =>
                {
                    b.HasOne("ERP.API.Models.Position", "Position")
                        .WithMany("Employees")
                        .HasForeignKey("PositionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ERP.API.Models.GeneralLedger", b =>
                {
                    b.HasOne("ERP.API.Models.CreditAccount", "CreditAccount")
                        .WithMany()
                        .HasForeignKey("CreditAccountId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ERP.API.Models.DebitAccount", "DebitAccount")
                        .WithMany()
                        .HasForeignKey("DebitAccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ERP.API.Models.Inventory", b =>
                {
                    b.HasOne("ERP.API.Models.Item", "Item")
                        .WithMany()
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ERP.API.Models.ItemSupplier", b =>
                {
                    b.HasOne("ERP.API.Models.Item", "Item")
                        .WithMany()
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ERP.API.Models.Supplier", "Supplier")
                        .WithMany()
                        .HasForeignKey("SupplierId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ERP.API.Models.Order", b =>
                {
                    b.HasOne("ERP.API.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("ApprovedBy")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ERP.API.Models.Supplier", "Supplier")
                        .WithMany()
                        .HasForeignKey("SupplierId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ERP.API.Models.OrderItem", b =>
                {
                    b.HasOne("ERP.API.Models.Item", "Item")
                        .WithMany()
                        .HasForeignKey("ItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ERP.API.Models.Order", "Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
