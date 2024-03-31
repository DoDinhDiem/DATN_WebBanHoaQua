export interface IHoaDon {
    id?: number;
    KhachHangId?: number;
    hoTen?: string;
    soDienThoai?: number;
    email?: string;
    diaChi?: string;
    ghiChu?: string;
    giamGia?: number;
    tongTien?: number;
    trangThaiDonHang?: string;
    trangThaiThanhToan?: boolean;
    phuongThucThanhToan?: string;
    chitiethoadonbans?:
        | {
              sanPhamId?: number;
              soLuong?: number;
              giaBan?: number;
              thanhTien?: number;
          }[]
        | null;
}
