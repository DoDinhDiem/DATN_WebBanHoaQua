using Back_End.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class KhachHangController : ControllerBase
    {
        private doan5Context _context;

        public KhachHangController(doan5Context context)
        {
            _context = context;
        }

        [Route("GetAll_KhacHang")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var query = _context.Khachangs.ToList();
                return Ok(query);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
