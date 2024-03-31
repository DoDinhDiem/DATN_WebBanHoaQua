export interface ISanPham {
    id?: number;
    loaiSanPhamId?: number;
    tenSanPham?: string;
    moTa?: string;
    giaBan?: number;
    giamGia?: number;
    soLuong?: number;
    anhsanphams?:
        | {
              image?: string;
              trangThai?: boolean;
          }[]
        | null;
}
