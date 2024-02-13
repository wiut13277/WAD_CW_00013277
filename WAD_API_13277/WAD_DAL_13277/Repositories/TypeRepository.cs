using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WAD_API_13277.Models;
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
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            var type = _mainDbContext.Types.FirstOrDefault(t => t.Id == id);
            if (type != null)
            {
                try
                {
                    _mainDbContext.Types.Remove(type);
                    _mainDbContext.SaveChanges();
                }
                catch (Exception)
                {

                    throw;
                } 
            }
            throw new Exception();
        }

        public IEnumerable<FeedbackType> GetAll()
        {
            return _mainDbContext.Types.ToList();
        }

        public FeedbackType? GetById(int id)
        {
            return _mainDbContext.Types.FirstOrDefault(t => t.Id == id);
        }

        public void Update(FeedbackType entity)
        {
            throw new NotImplementedException();
        }
    }
}
