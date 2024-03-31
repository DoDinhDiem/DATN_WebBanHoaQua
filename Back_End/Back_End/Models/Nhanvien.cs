using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Nhanvien
    {
        public Nhanvien()
        {
            Hoadonnhaps = new HashSet<Hoadonnhap>();
            Tintucs = new HashSet<Tintuc>();
        }

        public int Id { get; set; }
        public int? RoleId { get; set; }
        public string? Email { get; set; }
        public string? PassWork { get; set; }
        public string? Image { get; set; }
        public string? HoTen { get; set; }
        public string? SoDienThoai { get; set; }
        public string? DiaChi { get; set; }
        public string? GioiTinh { get; set; }
        public DateTime? NgaySinh { get; set; }
        public DateTime? NgayVaoLam { get; set; }
        public string? Token { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime? RefreshTokenExpiryTime { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Hoadonnhap> Hoadonnhaps { get; set; }
        public virtual ICollection<Tintuc> Tintucs { get; set; }
    }
}
