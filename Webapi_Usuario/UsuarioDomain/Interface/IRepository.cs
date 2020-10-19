using System;
using System.Collections.Generic;
using Webapi_Usuario.Domain.Entities;

namespace Webapi_Usuario.Domain.Interface
{
    public interface IRepository<T> where T: BaseEntity
    {
        void Insert(T obj);

        void Update(T obj);

        void Delete(int id);

        T Select(int id);

        IList<T> SelectAll();

    }
}
