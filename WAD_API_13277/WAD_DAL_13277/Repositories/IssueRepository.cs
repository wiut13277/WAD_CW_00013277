using Microsoft.EntityFrameworkCore;
using WAD_DAL_13277.Models;
using WAD_DAL_13277.Data;

namespace WAD_DAL_13277.Repositories
{
    public class IssueRepository : ICRUDRepository<Issue>
    {
        private readonly MainDbContext _mainDbContext;

        public IssueRepository(MainDbContext mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public void Create(Issue entity)
        {
            var priority = _mainDbContext.Priorities.FirstOrDefault(t => t.Id == entity.Priority.Id);
            entity.Priority = priority;

            _mainDbContext.Issues.Add(entity);

            Save();
        }

        public void Delete(int id)
        {
            var issue = GetById(id);

            _mainDbContext.Issues.Remove(issue);

            Save();
        }

        public IEnumerable<Issue> GetAll()
        {
            return _mainDbContext.Issues.Include(f => f.Priority).ToList();
        }

        public Issue GetById(int id)
        {
            var issue = _mainDbContext.Issues.Include(f => f.Priority).FirstOrDefault(f => f.Id == id);

            if (issue == null)
                throw new Exception();

            return issue;
        }

        public void Update(Issue entity, int id)
        {
            var issue = GetById(id);
            var priority = _mainDbContext.Priorities.FirstOrDefault(t => t.Id ==entity.Priority.Id);


            issue.Title = entity.Title;
            issue.Description = entity.Description;
            issue.Priority = priority;

            Save();
        }

        private void Save()
        {
            try
            {
                _mainDbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
