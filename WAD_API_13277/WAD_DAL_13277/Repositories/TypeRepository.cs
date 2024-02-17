using WAD_DAL_13277.Models;
using WAD_DAL_13277.Data;

namespace WAD_DAL_13277.Repositories
{
    public class TypeRepository : ICRUDRepository<FeedbackType>
    {
        private readonly MainDbContext _mainDbContext;

        public TypeRepository(MainDbContext mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public void Create(FeedbackType entity)
        {
            _mainDbContext.Types.AddAsync(entity);
            Save();
        }

        public void Delete(int id)
        {
            var type = _mainDbContext.Types.FirstOrDefault(t => t.Id == id);
            if (type != null)
            {
                _mainDbContext.Types.Remove(type);
                Save();
            }
            throw new Exception();
        }

        public IEnumerable<FeedbackType> GetAll()
        {
            return _mainDbContext.Types.ToList();
        }

        public FeedbackType GetById(int id)
        {
            var feedbackType = _mainDbContext.Types.FirstOrDefault(t => t.Id == id);
            if (feedbackType == null)
                throw new Exception();

            return feedbackType;
        }

        public void Update(FeedbackType entity, int id)
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
