USE [Usuario]
GO

/****** Object: Table [dbo].[Usuarios] Script Date: 19/10/2020 00:01:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Usuarios] (
    [Id]             INT  IDENTITY (1, 1) NOT NULL,
    [Nome]           TEXT NOT NULL,
    [Sobrenome]      TEXT NOT NULL,
    [Email]          TEXT NOT NULL,
    [DataNascimento] DATE NOT NULL,
    [Escolaridade]   INT  NOT NULL
);


