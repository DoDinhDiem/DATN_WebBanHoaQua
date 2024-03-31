using Back_End.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class SanPhamController : ControllerBase
    {
        private doan5Context _context;
        public static IWebHostEnvironment _environment;

        public SanPhamController(doan5Context context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [Route("GetAll_SanPham")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var query = _context.Sanphams.Select(x => new
                {
                    id = x.Id,
                    tenLoai = x.LoaiSanPham.TenLoai,
                    tenSanPham = x.TenSanPham,
                    moTa = x.MoTa,
                    giaBan = x.GiaBan,
                    giamGia = x.GiamGia,
                    soLuong = x.SoLuong,
                    imageMain = x.Anhsanphams.Where(a => a.TrangThai == true).Select(a => a.Image).FirstOrDefault(),
                }).ToList();
                return Ok(query);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("GetById_SanPham/{id}")]
        [HttpGet]
        public IActionResult GetById(int id)
        {
            try
            {
                var query = _context.Sanphams
                                    .Where(x => x.Id == id)
                                    .Select(x => new 
                                    { 
                                        id = x.Id,
                                        loaiSanPhamId = x.LoaiSanPhamId,
                                        tenLoai = x.LoaiSanPham.TenLoai,
                                        tenSanPham = x.TenSanPham,
                                        moTa = x.MoTa,
                                        giaBan = x.GiaBan,
                                        giamGia = x.GiamGia,
                                        imageMain = x.Anhsanphams.Where( a => a.SanPhamId == id && a.TrangThai == true).Select(a=> a.Image).FirstOrDefault(),
                                        imageList = x.Anhsanphams.Where(a => a.SanPhamId == id && a.TrangThai != true).Select(a => new { image = a.Image } ).ToList()

                                    }).FirstOrDefault();
                return Ok(query);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Create_SanPham")]
        [HttpPost]
        public IActionResult Create([FromBody] Sanpham model)
        {
            try
            {
                model.SoLuong = 0;
                _context.Sanphams.Add(model);
                var images = new List<Anhsanpham>();
                foreach(var imgs in model.Anhsanphams)
                {
                    var img = new Anhsanpham
                    {
                        SanPhamId = model.Id,
                        Image = imgs.Image,
                        TrangThai = imgs.TrangThai
                    };
                    images.Add(img);
                }

                _context.SaveChanges();

                return Ok(new
                {
                    message = "Thêm sản phẩm thành công"
                });
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Update_SanPham")]
        [HttpPut]
        public IActionResult Update([FromBody] Sanpham model)
        {
            try
            {
                var query = _context.Sanphams.Find(model.Id);

                query.LoaiSanPhamId = model.LoaiSanPhamId;
                query.TenSanPham = model.TenSanPham;
                query.MoTa = model.MoTa;
                query.GiaBan = model.GiaBan;
                query.GiamGia = model.GiamGia;

                _context.Anhsanphams.RemoveRange(_context.Anhsanphams.Where(a => a.SanPhamId == model.LoaiSanPhamId));
                foreach (var imgs in model.Anhsanphams)
                {
                    var img = new Anhsanpham
                    {
                        SanPhamId = model.Id,
                        Image = imgs.Image,
                        TrangThai = imgs.TrangThai
                    };
                    query.Anhsanphams.Add(img);
                }

                _context.SaveChanges();

                return Ok(new
                {
                    message = "Sửa sản phẩm thành công"
                });
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Delete_SanPham/{id}")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            try
            {
                var query = _context.Sanphams.Find(id);
                _context.Sanphams.Remove(query);
                _context.SaveChanges();

                return Ok(new
                {
                    message = "Xóa sản phẩm thành công"
                });
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("Upload_Image")]
        [HttpPost]
        public async Task<IActionResult> Upload(List<IFormFile> files)
        {
            try
            {
                List<string> fileNames = new List<string>();

                foreach (var file in files)
                {
                    if (file == null || file.Length == 0)
                    {
                        continue;
                    }

                    string uploadsFolder = Path.Combine(_environment.WebRootPath, "Uploads", "Products");
                    if (!Directory.Exists(uploadsFolder))
                    {
                        Directory.CreateDirectory(uploadsFolder);
                    }

                    string filePath = Path.Combine(uploadsFolder, file.FileName);

                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }

                    fileNames.Add(file.FileName);
                }

                return Ok(fileNames);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
