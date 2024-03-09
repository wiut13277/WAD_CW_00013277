using Microsoft.EntityFrameworkCore;
using WAD_DAL_13277.Models;

namespace WAD_DAL_13277.Data
{
    public class MainDbContext : DbContext
    {
        public DbSet<Issue> Issues { get; set; }
        public DbSet<Priority> Priorities { get; set; }

        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) 
        { 
        }
    }
}
