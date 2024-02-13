﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WAD_DAL_13277.Repositories
{
    public interface ICRUDRepository<T>
    {
        T GetById(int id);
        IEnumerable<T> GetAll();
        void Create(T entity);
        void Update(T entity);
        void Delete(int id);
    }
}
