namespace WAD_DAL_13277.Repositories
{
    public interface ICRUDRepository<T>
    {
        T GetById(int id);
        IEnumerable<T> GetAll();
        void Create(T entity);
        void Update(T entity, int id);
        void Delete(int id);
    }
}
