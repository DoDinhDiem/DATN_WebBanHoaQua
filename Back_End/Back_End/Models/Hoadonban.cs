using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Hoadonban
    {
        public Hoadonban()
        {
            Chitiethoadonbans = new HashSet<Chitiethoadonban>();
        }

        public int Id { get; set; }
        public int? KhachHangId { get; set; }
        public string? HoTen { get; set; }
        public string? Email { get; set; }
        public string? SoDienThoai { get; set; }
        public string? DiaChi { get; set; }
        public string? GhiChu { get; set; }
        public decimal? TongTien { get; set; }
        public string? TrangThaiDonHang { get; set; }
        public bool? TrangThaiThanhToan { get; set; }
        public string? PhuongThucThanhToan { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual Khachang? KhachHang { get; set; }
        public virtual ICollection<Chitiethoadonban> Chitiethoadonbans { get; set; }
    }
}
