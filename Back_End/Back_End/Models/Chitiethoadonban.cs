using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Chitiethoadonban
    {
        public int Id { get; set; }
        public int? HoaDonBanId { get; set; }
        public int? SanPhamId { get; set; }
        public decimal? GiaBan { get; set; }
        public int? SoLuong { get; set; }
        public decimal? ThanhTien { get; set; }

        public virtual Hoadonban? HoaDonBan { get; set; }
        public virtual Sanpham? SanPham { get; set; }
    }
}
