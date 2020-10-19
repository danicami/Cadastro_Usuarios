using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Webapi_Usuario.Domain.Entities;
using Webapi_Usuario.Domain.Interface;
using Webapi_Usuario.Service.Validators;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Webapi_Usuario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : Controller
    {
        private IService<Usuarios> service;

        public UsuarioController(IService<Usuarios> _service)
        {
            service = _service;

        }

        // GET: api/Usuario
        [HttpGet]
        public ActionResult<IEnumerable<Usuarios>> GetUsuarios()
        {
            return new ObjectResult(service.Get());
        }

        // GET: api/Usuario/5
        [HttpGet("{id}")]
        public ActionResult<Usuarios> GetUsuario(int id)
        {
            try
            {
                return new ObjectResult(service.Get(id));
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        // POST: api/Usuario
        [HttpPost]
        public ActionResult<Usuarios> AddUsuario(Usuarios dbUsuario)
        {
            try
            {
                service.Post<UsuarioValidator>(dbUsuario);

                return new ObjectResult(dbUsuario);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public IActionResult UpdateUsuario(int id, Usuarios dbUsuario)
        {
            try
            {
                dbUsuario.Id = id;
                service.Put<UsuarioValidator>(dbUsuario);

                return new NoContentResult();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }

        // DELETE: api/Usuario/5
        [HttpDelete("{id}")]
        public ActionResult<Usuarios> DeleteUsuario(int id)
        {
            try
            {
                service.Delete(id);

                return new NoContentResult();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
  
        }

    }
}
