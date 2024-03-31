using Back_End.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class QuyenController : ControllerBase
    {
        private doan5Context _context;
        public QuyenController(doan5Context context)
        {
            _context = context;
        }

        [Route("GetAll_Quyen")]
        [HttpGet]
        public IActionResult GetALL()
        {
            try
            {
                var query = _context.Roles.ToList();
                return Ok(query);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("GetById_Quyen/{id}")]
        [HttpGet]
        public IActionResult GetById(int id)
        {
            try
            {
                var query = _context.Roles.Find(id);
                return Ok(query);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Create_Quyen")]
        [HttpPost]
        public IActionResult Create([FromBody] Role model)
        {
            try
            {
                _context.Roles.Add(model);
                _context.SaveChanges();
                return Ok(new
                {
                    message = "Thêm quyền thành công"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Update_Quyen")]
        [HttpPut]
        public IActionResult Update([FromBody] Role model)
        {
            try
            {
                var query = _context.Roles.Find(model.Id);
                query.TenRole = model.TenRole;

                _context.SaveChanges();
                return Ok(new
                {
                    message = "Sửa quyền thành công"
                });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Delete_Quyen/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            try
            {
                var query = _context.Roles.Find(id);
                _context.Roles.Remove(query);
                _context.SaveChanges();
                return Ok(new
                {
                    message = "Xóa quyền thành công"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
