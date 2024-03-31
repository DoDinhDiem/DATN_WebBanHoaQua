using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Lienhe
    {
        public int Id { get; set; }
        public string? BanDo { get; set; }
        public string? Duong { get; set; }
        public string? ThonXom { get; set; }
        public string? XaPhuong { get; set; }
        public string? QuanHuyen { get; set; }
        public string? TinhThanhPho { get; set; }
        public string? Email { get; set; }
        public string? SoDienThoai { get; set; }
    }
}
