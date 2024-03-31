export interface IHoaDonBan {
    id?: number;
    khachHangId?: number;
    email?: string;
    soDienThoai?: string;
    diaChi?: string;
    ghiChu?: string;
    tongTien?: number;
    trangThaiDonHang?: string;
    trangThaiThanhToan?: boolean;
    phuongThucThanhToan?: string;
    hoTen?: string;
    chitiethoadonbans?:
        | {
              sanPhamId?: number;
              soLuong?: number;
              giaBan?: number;
              thanhTien?: number;
          }[]
        | null;
}
