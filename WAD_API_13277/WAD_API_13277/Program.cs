using Microsoft.EntityFrameworkCore;
using WAD_DAL_13277.Models;
using WAD_DAL_13277.Data;
using WAD_DAL_13277.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MainDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddTransient<ICRUDRepository<Priority>, PriorityRepository>();
builder.Services.AddTransient<ICRUDRepository<Issue>, IssueRepository>();

builder.Services.AddCors(o =>
    o.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        }));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();



app.UseAuthorization();

app.MapControllers();

app.Run();
