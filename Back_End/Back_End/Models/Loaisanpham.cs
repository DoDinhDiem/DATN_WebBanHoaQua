using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Loaisanpham
    {
        public Loaisanpham()
        {
            Sanphams = new HashSet<Sanpham>();
        }

        public int Id { get; set; }
        public string? TenLoai { get; set; }
        public string? Icon { get; set; }
        public bool? TrangThai { get; set; }

        public virtual ICollection<Sanpham> Sanphams { get; set; }
    }
}
