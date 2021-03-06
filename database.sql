USE [master]
GO
/****** Object:  Database [DB_A4165E_jordanrigo]    Script Date: 11/14/2018 9:21:10 PM ******/
CREATE DATABASE [DB_A4165E_jordanrigo]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DB_A4165E_jordanrigo_Data', FILENAME = N'H:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\DB_A4165E_jordanrigo_DATA.mdf' , SIZE = 8192KB , MAXSIZE = 1024000KB , FILEGROWTH = 10%)
 LOG ON 
( NAME = N'DB_A4165E_jordanrigo_Log', FILENAME = N'H:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\DB_A4165E_jordanrigo_Log.LDF' , SIZE = 3072KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DB_A4165E_jordanrigo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ARITHABORT OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET  ENABLE_BROKER 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET  MULTI_USER 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET QUERY_STORE = OFF
GO
USE [DB_A4165E_jordanrigo]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [DB_A4165E_jordanrigo]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/14/2018 9:21:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeRoles]    Script Date: 11/14/2018 9:21:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeRoles](
	[EmployeeId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_EmployeeRoles] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 11/14/2018 9:21:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[Created] [datetime2](7) NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[LastUpdated] [datetime2](7) NULL,
	[PasswordHash] [varbinary](max) NOT NULL,
	[PasswordSalt] [varbinary](max) NOT NULL,
	[PositionId] [int] NOT NULL,
	[Salary] [float] NOT NULL,
	[Timestamp] [timestamp] NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Items]    Script Date: 11/14/2018 9:21:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Items](
	[ItemId] [int] IDENTITY(1,1) NOT NULL,
	[AvgCost] [float] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[QuantityOnHand] [int] NOT NULL,
	[QuantityOrdered] [int] NOT NULL,
	[RetailPrice] [float] NOT NULL,
	[Status] [nvarchar](max) NULL,
	[Timestamp] [timestamp] NULL,
 CONSTRAINT [PK_Items] PRIMARY KEY CLUSTERED 
(
	[ItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ItemSuppliers]    Script Date: 11/14/2018 9:21:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ItemSuppliers](
	[ItemId] [int] NOT NULL,
	[SupplierId] [int] NOT NULL,
	[IsPrimary] [bit] NOT NULL,
	[LeadTime] [int] NOT NULL,
	[Timestamp] [timestamp] NULL,
	[UnitCost] [float] NOT NULL,
 CONSTRAINT [PK_ItemSuppliers] PRIMARY KEY CLUSTERED 
(
	[ItemId] ASC,
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderItems]    Script Date: 11/14/2018 9:21:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderItems](
	[OrderId] [int] NOT NULL,
	[ItemId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Timestamp] [timestamp] NULL,
	[UnitCost] [float] NOT NULL,
 CONSTRAINT [PK_OrderItems] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 11/14/2018 9:21:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[ApprovedBy] [int] NULL,
	[CreatedBy] [int] NOT NULL,
	[ReceivedDate] [datetime2](7) NULL,
	[RequestedDate] [datetime2](7) NOT NULL,
	[Status] [nvarchar](max) NULL,
	[SupplierId] [int] NOT NULL,
	[Timestamp] [timestamp] NULL,
	[TotalCost] [float] NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Positions]    Script Date: 11/14/2018 9:21:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Positions](
	[PositionId] [int] IDENTITY(1,1) NOT NULL,
	[PositionName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Positions] PRIMARY KEY CLUSTERED 
(
	[PositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 11/14/2018 9:21:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleNameEn] [nvarchar](max) NULL,
	[RoleNameHu] [nvarchar](max) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 11/14/2018 9:21:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suppliers](
	[SupplierId] [int] IDENTITY(1,1) NOT NULL,
	[Address] [nvarchar](max) NULL,
	[City] [nvarchar](max) NULL,
	[ContactName] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[Status] [nvarchar](max) NULL,
	[Timestamp] [timestamp] NULL,
 CONSTRAINT [PK_Suppliers] PRIMARY KEY CLUSTERED 
(
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [IX_EmployeeRoles_RoleId]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_EmployeeRoles_RoleId] ON [dbo].[EmployeeRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Employees_PositionId]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_Employees_PositionId] ON [dbo].[Employees]
(
	[PositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ItemSuppliers_SupplierId]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_ItemSuppliers_SupplierId] ON [dbo].[ItemSuppliers]
(
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_OrderItems_ItemId]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_OrderItems_ItemId] ON [dbo].[OrderItems]
(
	[ItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Orders_ApprovedBy]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_Orders_ApprovedBy] ON [dbo].[Orders]
(
	[ApprovedBy] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Orders_CreatedBy]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_Orders_CreatedBy] ON [dbo].[Orders]
(
	[CreatedBy] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Orders_SupplierId]    Script Date: 11/14/2018 9:21:16 PM ******/
CREATE NONCLUSTERED INDEX [IX_Orders_SupplierId] ON [dbo].[Orders]
(
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmployeeRoles]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeRoles_Employees_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[EmployeeRoles] CHECK CONSTRAINT [FK_EmployeeRoles_Employees_EmployeeId]
GO
ALTER TABLE [dbo].[EmployeeRoles]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeRoles_Roles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[EmployeeRoles] CHECK CONSTRAINT [FK_EmployeeRoles_Roles_RoleId]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Positions_PositionId] FOREIGN KEY([PositionId])
REFERENCES [dbo].[Positions] ([PositionId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Positions_PositionId]
GO
ALTER TABLE [dbo].[ItemSuppliers]  WITH CHECK ADD  CONSTRAINT [FK_ItemSuppliers_Items_ItemId] FOREIGN KEY([ItemId])
REFERENCES [dbo].[Items] ([ItemId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ItemSuppliers] CHECK CONSTRAINT [FK_ItemSuppliers_Items_ItemId]
GO
ALTER TABLE [dbo].[ItemSuppliers]  WITH CHECK ADD  CONSTRAINT [FK_ItemSuppliers_Suppliers_SupplierId] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([SupplierId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ItemSuppliers] CHECK CONSTRAINT [FK_ItemSuppliers_Suppliers_SupplierId]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Items_ItemId] FOREIGN KEY([ItemId])
REFERENCES [dbo].[Items] ([ItemId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Items_ItemId]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Orders_OrderId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Employees_ApprovedBy] FOREIGN KEY([ApprovedBy])
REFERENCES [dbo].[Employees] ([EmployeeId])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Employees_ApprovedBy]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Employees_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Employees_CreatedBy]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Suppliers_SupplierId] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([SupplierId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Suppliers_SupplierId]
GO
USE [master]
GO
ALTER DATABASE [DB_A4165E_jordanrigo] SET  READ_WRITE 
GO
