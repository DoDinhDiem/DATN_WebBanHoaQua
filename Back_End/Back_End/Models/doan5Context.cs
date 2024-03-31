using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Back_End.Models
{
    public partial class doan5Context : DbContext
    {
        public doan5Context()
        {
        }

        public doan5Context(DbContextOptions<doan5Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Anhsanpham> Anhsanphams { get; set; } = null!;
        public virtual DbSet<Chitiethoadonban> Chitiethoadonbans { get; set; } = null!;
        public virtual DbSet<Chitiethoadonnhap> Chitiethoadonnhaps { get; set; } = null!;
        public virtual DbSet<Gioithieu> Gioithieus { get; set; } = null!;
        public virtual DbSet<Hoadonban> Hoadonbans { get; set; } = null!;
        public virtual DbSet<Hoadonnhap> Hoadonnhaps { get; set; } = null!;
        public virtual DbSet<Khachang> Khachangs { get; set; } = null!;
        public virtual DbSet<Lienhe> Lienhes { get; set; } = null!;
        public virtual DbSet<Loaisanpham> Loaisanphams { get; set; } = null!;
        public virtual DbSet<Nhacungcap> Nhacungcaps { get; set; } = null!;
        public virtual DbSet<Nhanvien> Nhanviens { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Sanpham> Sanphams { get; set; } = null!;
        public virtual DbSet<Slide> Slides { get; set; } = null!;
        public virtual DbSet<Tintuc> Tintucs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;database=doan5;user=root;password=admin@123", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.36-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_unicode_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Anhsanpham>(entity =>
            {
                entity.ToTable("anhsanpham");

                entity.HasIndex(e => e.SanPhamId, "sanPham_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Image)
                    .HasMaxLength(255)
                    .HasColumnName("image");

                entity.Property(e => e.SanPhamId).HasColumnName("sanPham_id");

                entity.Property(e => e.TrangThai).HasColumnName("trangThai");

                entity.HasOne(d => d.SanPham)
                    .WithMany(p => p.Anhsanphams)
                    .HasForeignKey(d => d.SanPhamId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("anhsanpham_ibfk_1");
            });

            modelBuilder.Entity<Chitiethoadonban>(entity =>
            {
                entity.ToTable("chitiethoadonban");

                entity.HasIndex(e => e.HoaDonBanId, "hoaDonBan_id");

                entity.HasIndex(e => e.SanPhamId, "sanPham_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GiaBan)
                    .HasPrecision(18, 2)
                    .HasColumnName("giaBan");

                entity.Property(e => e.HoaDonBanId).HasColumnName("hoaDonBan_id");

                entity.Property(e => e.SanPhamId).HasColumnName("sanPham_id");

                entity.Property(e => e.SoLuong).HasColumnName("soLuong");

                entity.Property(e => e.ThanhTien)
                    .HasPrecision(18, 2)
                    .HasColumnName("thanhTien");

                entity.HasOne(d => d.HoaDonBan)
                    .WithMany(p => p.Chitiethoadonbans)
                    .HasForeignKey(d => d.HoaDonBanId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("chitiethoadonban_ibfk_1");

                entity.HasOne(d => d.SanPham)
                    .WithMany(p => p.Chitiethoadonbans)
                    .HasForeignKey(d => d.SanPhamId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("chitiethoadonban_ibfk_2");
            });

            modelBuilder.Entity<Chitiethoadonnhap>(entity =>
            {
                entity.ToTable("chitiethoadonnhap");

                entity.HasIndex(e => e.HoaDonNhapId, "hoaDonNhap_id");

                entity.HasIndex(e => e.SanPhamId, "sanPham_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GiaNhap)
                    .HasPrecision(18, 2)
                    .HasColumnName("giaNhap");

                entity.Property(e => e.HoaDonNhapId).HasColumnName("hoaDonNhap_id");

                entity.Property(e => e.SanPhamId).HasColumnName("sanPham_id");

                entity.Property(e => e.SoLuong).HasColumnName("soLuong");

                entity.Property(e => e.ThanhTien)
                    .HasPrecision(18, 2)
                    .HasColumnName("thanhTien");

                entity.HasOne(d => d.HoaDonNhap)
                    .WithMany(p => p.Chitiethoadonnhaps)
                    .HasForeignKey(d => d.HoaDonNhapId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("chitiethoadonnhap_ibfk_1");

                entity.HasOne(d => d.SanPham)
                    .WithMany(p => p.Chitiethoadonnhaps)
                    .HasForeignKey(d => d.SanPhamId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("chitiethoadonnhap_ibfk_2");
            });

            modelBuilder.Entity<Gioithieu>(entity =>
            {
                entity.ToTable("gioithieu");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GioiThieu1)
                    .HasColumnType("text")
                    .HasColumnName("gioiThieu");
            });

            modelBuilder.Entity<Hoadonban>(entity =>
            {
                entity.ToTable("hoadonban");

                entity.HasIndex(e => e.KhachHangId, "khachHang_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DiaChi)
                    .HasColumnType("text")
                    .HasColumnName("diaChi");
                entity.Property(e => e.HoTen)
                    .HasMaxLength(255)
                    .HasColumnName("hoTen");
                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.GhiChu)
                    .HasColumnType("text")
                    .HasColumnName("ghiChu");

                entity.Property(e => e.KhachHangId).HasColumnName("khachHang_id");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("ngayTao");

                entity.Property(e => e.PhuongThucThanhToan)
                    .HasMaxLength(255)
                    .HasColumnName("phuongThucThanhToan");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(15)
                    .HasColumnName("soDienThoai")
                    .IsFixedLength();

                entity.Property(e => e.TongTien)
                    .HasPrecision(18, 2)
                    .HasColumnName("tongTien");

                entity.Property(e => e.TrangThaiDonHang)
                        .HasMaxLength(255)
                        .HasColumnName("trangThaiDonHang");

                entity.Property(e => e.TrangThaiThanhToan).HasColumnName("trangThaiThanhToan");

                entity.HasOne(d => d.KhachHang)
                    .WithMany(p => p.Hoadonbans)
                    .HasForeignKey(d => d.KhachHangId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("hoadonban_ibfk_1");
            });

            modelBuilder.Entity<Hoadonnhap>(entity =>
            {
                entity.ToTable("hoadonnhap");

                entity.HasIndex(e => e.NhaCungCapId, "nhaCungCap_id");

                entity.HasIndex(e => e.NhanVienId, "nhanVien_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ngayTao");

                entity.Property(e => e.NhaCungCapId).HasColumnName("nhaCungCap_id");

                entity.Property(e => e.NhanVienId).HasColumnName("nhanVien_id");

                entity.Property(e => e.TongTien)
                    .HasPrecision(18, 2)
                    .HasColumnName("tongTien");

                entity.Property(e => e.TrangThaiThanhToan).HasColumnName("trangThaiThanhToan");

                entity.HasOne(d => d.NhaCungCap)
                    .WithMany(p => p.Hoadonnhaps)
                    .HasForeignKey(d => d.NhaCungCapId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("hoadonnhap_ibfk_3");

                entity.HasOne(d => d.NhanVien)
                    .WithMany(p => p.Hoadonnhaps)
                    .HasForeignKey(d => d.NhanVienId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("hoadonnhap_ibfk_4");
            });

            modelBuilder.Entity<Khachang>(entity =>
            {
                entity.ToTable("khachang");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DiaChi)
                    .HasColumnType("text")
                    .HasColumnName("diaChi");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.GioiTinh)
                    .HasMaxLength(5)
                    .HasColumnName("gioiTinh")
                    .IsFixedLength();

                entity.Property(e => e.HoTen)
                    .HasMaxLength(255)
                    .HasColumnName("hoTen");

                entity.Property(e => e.NgaySinh).HasColumnName("ngaySinh");

                entity.Property(e => e.PassWork)
                    .HasMaxLength(255)
                    .HasColumnName("passWork");

                entity.Property(e => e.RefreshToken)
                    .HasMaxLength(255)
                    .HasColumnName("refreshToken");

                entity.Property(e => e.RefreshTokenExpiryTime).HasColumnType("datetime");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(15)
                    .HasColumnName("soDienThoai")
                    .IsFixedLength();

                entity.Property(e => e.Token)
                    .HasColumnType("text")
                    .HasColumnName("token");
            });

            modelBuilder.Entity<Lienhe>(entity =>
            {
                entity.ToTable("lienhe");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.BanDo)
                    .HasColumnType("text")
                    .HasColumnName("banDo");

                entity.Property(e => e.Duong)
                    .HasMaxLength(255)
                    .HasColumnName("duong");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.QuanHuyen)
                    .HasMaxLength(255)
                    .HasColumnName("quanHuyen");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(15)
                    .HasColumnName("soDienThoai")
                    .IsFixedLength();

                entity.Property(e => e.ThonXom)
                    .HasMaxLength(255)
                    .HasColumnName("thonXom");

                entity.Property(e => e.TinhThanhPho)
                    .HasMaxLength(255)
                    .HasColumnName("tinhThanhPho");

                entity.Property(e => e.XaPhuong)
                    .HasMaxLength(255)
                    .HasColumnName("xaPhuong");
            });

            modelBuilder.Entity<Loaisanpham>(entity =>
            {
                entity.ToTable("loaisanpham");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Icon)
                    .HasMaxLength(255)
                    .HasColumnName("icon");

                entity.Property(e => e.TenLoai)
                    .HasMaxLength(255)
                    .HasColumnName("tenLoai");

                entity.Property(e => e.TrangThai).HasColumnName("trangThai");
            });

            modelBuilder.Entity<Nhacungcap>(entity =>
            {
                entity.ToTable("nhacungcap");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DiaChi)
                    .HasMaxLength(255)
                    .HasColumnName("diaChi");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(15)
                    .HasColumnName("soDienThoai")
                    .IsFixedLength();

                entity.Property(e => e.TenNhaCungCap)
                    .HasMaxLength(255)
                    .HasColumnName("tenNhaCungCap");
            });

            modelBuilder.Entity<Nhanvien>(entity =>
            {
                entity.ToTable("nhanvien");

                entity.HasIndex(e => e.RoleId, "role_Id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DiaChi)
                    .HasColumnType("text")
                    .HasColumnName("diaChi");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.GioiTinh)
                    .HasMaxLength(5)
                    .HasColumnName("gioiTinh")
                    .IsFixedLength();

                entity.Property(e => e.HoTen)
                    .HasMaxLength(255)
                    .HasColumnName("hoTen");

                entity.Property(e => e.Image)
                    .HasMaxLength(255)
                    .HasColumnName("image");

                entity.Property(e => e.NgaySinh)
                        .HasColumnType("datetime")
                        .HasColumnName("ngaySinh");

                entity.Property(e => e.NgayVaoLam)
                                      .HasColumnType("datetime")
                                      .HasColumnName("ngayVaoLam");

                entity.Property(e => e.PassWork)
                    .HasMaxLength(255)
                    .HasColumnName("passWork");

                entity.Property(e => e.RefreshToken)
                    .HasMaxLength(255)
                    .HasColumnName("refreshToken");

                entity.Property(e => e.RefreshTokenExpiryTime)
                    .HasColumnType("datetime")
                    .HasColumnName("refreshTokenExpiryTime");

                entity.Property(e => e.RoleId).HasColumnName("role_Id");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(15)
                    .HasColumnName("soDienThoai")
                    .IsFixedLength();

                entity.Property(e => e.Token)
                    .HasColumnType("text")
                    .HasColumnName("token");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Nhanviens)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("nhanvien_ibfk_1");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.TenRole)
                    .HasMaxLength(255)
                    .HasColumnName("tenRole");
            });

            modelBuilder.Entity<Sanpham>(entity =>
            {
                entity.ToTable("sanpham");

                entity.HasIndex(e => e.LoaiSanPhamId, "loaiSanPham_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GiaBan)
                    .HasPrecision(18, 2)
                    .HasColumnName("giaBan");

                entity.Property(e => e.GiamGia)
                      .HasPrecision(18, 2)
                      .HasColumnName("giamGia");

                entity.Property(e => e.LoaiSanPhamId).HasColumnName("loaiSanPham_id");

                entity.Property(e => e.SoLuong).HasColumnName("soLuong");

                entity.Property(e => e.TenSanPham)
                    .HasMaxLength(255)
                    .HasColumnName("tenSanPham");

                entity.Property(e => e.MoTa)
                    .HasColumnType("text")
                    .HasColumnName("moTa");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ngayTao");

                entity.HasOne(d => d.LoaiSanPham)
                    .WithMany(p => p.Sanphams)
                    .HasForeignKey(d => d.LoaiSanPhamId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sanpham_ibfk_1");
            });

            modelBuilder.Entity<Slide>(entity =>
            {
                entity.ToTable("slide");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Image)
                    .HasMaxLength(255)
                    .HasColumnName("image");
            });

            modelBuilder.Entity<Tintuc>(entity =>
            {
                entity.ToTable("tintuc");

                entity.HasIndex(e => e.NhanVienId, "nhanVien_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Image)
                    .HasMaxLength(255)
                    .HasColumnName("image");

                entity.Property(e => e.NgayTao)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("ngayTao");

                entity.Property(e => e.NhanVienId).HasColumnName("nhanVien_id");

                entity.Property(e => e.NoiDung)
                    .HasColumnType("text")
                    .HasColumnName("noiDung");

                entity.Property(e => e.TieuDe)
                    .HasMaxLength(255)
                    .HasColumnName("tieuDe");

                entity.HasOne(d => d.NhanVien)
                    .WithMany(p => p.Tintucs)
                    .HasForeignKey(d => d.NhanVienId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("tintuc_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
