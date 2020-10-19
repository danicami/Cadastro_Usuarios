using Microsoft.EntityFrameworkCore;
using Webapi_Usuario.Domain.Entities;
using Webapi_Usuario.Infra.Data.Mapping;

namespace Webapi_Usuario.Infra.Data.Context
{
    public class ApplicationContext :DbContext
    {

        public DbSet<Usuarios> Usuarios { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //        optionsBuilder.UseInMemoryDatabase (@"Server=(localdb)\mssqllocaldb;Database=Usuario;Trusted_Connection=True;ConnectRetryCount=0");

        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Usuarios>(new UsuarioMap().Configure);
        }

    }
}
