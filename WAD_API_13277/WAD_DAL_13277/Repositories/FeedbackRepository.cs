using Microsoft.EntityFrameworkCore;
using WAD_DAL_13277.Models;
using WAD_DAL_13277.Data;

namespace WAD_DAL_13277.Repositories
{
    public class FeedbackRepository : ICRUDRepository<Feedback>
    {
        private readonly MainDbContext _mainDbContext;

        public FeedbackRepository(MainDbContext mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public void Create(Feedback entity)
        {
            var feedbackType = _mainDbContext.Types.FirstOrDefault(t => t.Id == entity.Type.Id);
            entity.Type = feedbackType;

            _mainDbContext.Feedbacks.Add(entity);

            Save();
        }

        public void Delete(int id)
        {
            var feedback = GetById(id);

            _mainDbContext.Feedbacks.Remove(feedback);

            Save();
        }

        public IEnumerable<Feedback> GetAll()
        {
            return _mainDbContext.Feedbacks.Include(f => f.Type).ToList();
        }

        public Feedback GetById(int id)
        {
            var feedback = _mainDbContext.Feedbacks.Include(f => f.Type).FirstOrDefault(f => f.Id == id);

            if (feedback == null)
                throw new Exception();

            return feedback;
        }

        public void Update(Feedback entity, int id)
        {
            var feedback = GetById(id);
            var feedbackType = _mainDbContext.Types.FirstOrDefault(t => t.Id ==entity.Type.Id);


            feedback.Title = entity.Title;
            feedback.Description = entity.Description;
            feedback.Type = feedbackType;

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
