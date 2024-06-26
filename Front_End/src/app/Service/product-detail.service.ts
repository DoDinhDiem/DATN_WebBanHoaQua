import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../Http/baseUrl';

@Injectable({
    providedIn: 'root',
})
export class ProductDetailService {
    constructor(private http: HttpClient) {}

    GetChiTietSanPham(id: any) {
        return this.http.get<any>(baseUrl + 'api/User/GetChiTiet/' + id);
    }

    GetSanPhamTuongTu(spid: any, loaiid: any) {
        return this.http.get<any>(
            baseUrl + 'api/User/GetTuongTu/' + spid + '/' + loaiid
        );
    }
}
