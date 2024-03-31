using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Role
    {
        public Role()
        {
            Nhanviens = new HashSet<Nhanvien>();
        }

        public int Id { get; set; }
        public string? TenRole { get; set; }

        public virtual ICollection<Nhanvien> Nhanviens { get; set; }
    }
}
