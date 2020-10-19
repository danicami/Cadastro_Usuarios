using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Webapi_Usuario.Domain.Entities;

namespace Webapi_Usuario.Infra.Data.Mapping
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuarios>
    {
        public void Configure(EntityTypeBuilder<Usuarios> builder)
        {
            builder.ToTable("Usuarios");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Nome)
                .IsRequired()
                .HasColumnName("Nome");

            builder.Property(c => c.Sobrenome)
                .IsRequired()
                .HasColumnName("Sobrenome");

            builder.Property(c => c.Email)
                .IsRequired()
                .HasColumnName("Email");

            builder.Property(c => c.DataNascimento)
                .IsRequired()
                .HasColumnName("DataNascimento");

            builder.Property(c => c.Escolaridade)
                .IsRequired()
                .HasColumnName("Escolaridade");

        }
        

    }
}
