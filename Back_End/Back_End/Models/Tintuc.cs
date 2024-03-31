using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Tintuc
    {
        public int Id { get; set; }
        public int? NhanVienId { get; set; }
        public string? Image { get; set; }
        public string? TieuDe { get; set; }
        public string? NoiDung { get; set; }
        public DateTime? NgayTao { get; set; }

        public virtual Nhanvien? NhanVien { get; set; }
    }
}
