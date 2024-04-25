import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Http/baseUrl';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) {}

    getLichSuMuaHang(email: string, trangThai: number): Observable<any[]> {
        const params = `?email=${email}&trangThai=${trangThai}`;
        return this.http.get<any[]>(baseUrl + `api/User/DonMua${params}`);
    }
    getUpdateDonHang(id: any, hoadon: any): Observable<any> {
        return this.http.put<any>(
            baseUrl + `api/User/Update_DonHang/${id}`,
            hoadon
        );
    }

    updateKhachHang(KhachHang: any): Observable<any> {
        return this.http.put<any>(
            baseUrl + 'api/User/Update_KhachHang',
            KhachHang
        );
    }
}
