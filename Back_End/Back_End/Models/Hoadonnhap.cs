using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Hoadonnhap
    {
        public Hoadonnhap()
        {
            Chitiethoadonnhaps = new HashSet<Chitiethoadonnhap>();
        }

        public int Id { get; set; }
        public int? NhaCungCapId { get; set; }
        public int? NhanVienId { get; set; }
        public decimal? TongTien { get; set; }
        public bool? TrangThaiThanhToan { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual Nhacungcap? NhaCungCap { get; set; }
        public virtual Nhanvien? NhanVien { get; set; }
        public virtual ICollection<Chitiethoadonnhap> Chitiethoadonnhaps { get; set; }
    }
}
