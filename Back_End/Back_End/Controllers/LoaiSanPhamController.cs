using Back_End.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class LoaiSanPhamController : ControllerBase
    {
        private doan5Context _context;
        public static IWebHostEnvironment _environment;
        public LoaiSanPhamController(doan5Context context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [Route("GetAll_Loai")]
        [HttpGet]
        public IActionResult GetALL()
        {
            try
            {
                var query = _context.Loaisanphams.ToList();
                return Ok(query);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("GetById_Loai/{id}")]
        [HttpGet]
        public IActionResult GetById(int id) 
        {
            try
            {
                var query = _context.Loaisanphams.Find(id);
                return Ok(query);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Create_Loai")]
        [HttpPost]
        public IActionResult Create([FromBody]Loaisanpham model)
        {
            try
            {
                _context.Loaisanphams.Add(model);
                _context.SaveChanges();
                return Ok(new
                {
                    message = "Thêm loại sản phẩm thành công"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Update_Loai")]
        [HttpPut]
        public IActionResult Update([FromBody] Loaisanpham model)
        {
            try
            {
                var query = _context.Loaisanphams.Find(model.Id);
                query.TenLoai = model.TenLoai;
                query.Icon = model.Icon;
                query.TrangThai = model.TrangThai;

                _context.SaveChanges();
                return Ok(new
                {
                    message = "Sửa loại sản phẩm thành công"
                });

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("TrangThai/{id}")]
        [HttpPut]
        public IActionResult TrangThai(int id)
        {
            try
            {
                var query = _context.Loaisanphams.Find(id);
                query.TrangThai = !query.TrangThai;

                _context.SaveChanges();
                return Ok(new
                {
                    message = "Sửa loại sản phẩm thành công"
                });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Delete_Loai/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            try
            {
                var query = _context.Loaisanphams.Find(id);
                _context.Loaisanphams.Remove(query);
                _context.SaveChanges();
                return Ok(new
                {
                    message = "Xóa loại sản phẩm thành công"
                });
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Upload_Image")]
        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            try
            {
                string uploadsFolder = Path.Combine(_environment.WebRootPath, "Uploads", "LoaiSanPham");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string filePath = Path.Combine(uploadsFolder, file.FileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                return Ok(new { fileName = file.FileName });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
