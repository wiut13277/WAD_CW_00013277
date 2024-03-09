using WAD_DAL_13277.Models;
using WAD_DAL_13277.Data;

namespace WAD_DAL_13277.Repositories
{
    public class PriorityRepository : ICRUDRepository<Priority>
    {
        private readonly MainDbContext _mainDbContext;

        public PriorityRepository(MainDbContext mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public void Create(Priority entity)
        {
            _mainDbContext.Priorities.Add(entity);
            Save();
        }

        public void Delete(int id)
        {
            var priority = _mainDbContext.Priorities.FirstOrDefault(t => t.Id == id);
            if (priority == null) throw new Exception();

            _mainDbContext.Priorities.Remove(priority);
            Save();   
        }

        public IEnumerable<Priority> GetAll()
        {
            return _mainDbContext.Priorities.ToList();
        }

        public Priority GetById(int id)
        {
            var feedbackType = _mainDbContext.Priorities.FirstOrDefault(t => t.Id == id);
            if (feedbackType == null)
                throw new Exception();

            return feedbackType;
        }

        public void Update(Priority entity, int id)
        {
            var feedbackType = GetById(id);

            feedbackType.Name = entity.Name;

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
