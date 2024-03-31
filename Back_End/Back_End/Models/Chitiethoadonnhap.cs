using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Chitiethoadonnhap
    {
        public int Id { get; set; }
        public int? HoaDonNhapId { get; set; }
        public int? SanPhamId { get; set; }
        public decimal? GiaNhap { get; set; }
        public int? SoLuong { get; set; }
        public decimal? ThanhTien { get; set; }

        public virtual Hoadonnhap? HoaDonNhap { get; set; }
        public virtual Sanpham? SanPham { get; set; }
    }
}
