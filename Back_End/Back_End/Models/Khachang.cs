using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Khachang
    {
        public Khachang()
        {
            Hoadonbans = new HashSet<Hoadonban>();
        }

        public int Id { get; set; }
        public string? Email { get; set; }
        public string? PassWork { get; set; }
        public string? HoTen { get; set; }
        public string? SoDienThoai { get; set; }
        public string? DiaChi { get; set; }
        public string? GioiTinh { get; set; }
        public DateOnly? NgaySinh { get; set; }
        public string? Token { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime? RefreshTokenExpiryTime { get; set; }

        public virtual ICollection<Hoadonban> Hoadonbans { get; set; }
    }
}
