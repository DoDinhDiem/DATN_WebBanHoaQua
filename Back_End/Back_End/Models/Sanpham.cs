using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Sanpham
    {
        public Sanpham()
        {
            Anhsanphams = new HashSet<Anhsanpham>();
            Chitiethoadonbans = new HashSet<Chitiethoadonban>();
            Chitiethoadonnhaps = new HashSet<Chitiethoadonnhap>();
        }

        public int Id { get; set; }
        public int? LoaiSanPhamId { get; set; }
        public string? TenSanPham { get; set; }
        public string? MoTa { get; set; }
        public decimal? GiaBan { get; set; }
        public decimal? GiamGia { get; set; }
        public int? SoLuong { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual Loaisanpham? LoaiSanPham { get; set; }
        public virtual ICollection<Anhsanpham> Anhsanphams { get; set; }
        public virtual ICollection<Chitiethoadonban> Chitiethoadonbans { get; set; }
        public virtual ICollection<Chitiethoadonnhap> Chitiethoadonnhaps { get; set; }
    }
}
