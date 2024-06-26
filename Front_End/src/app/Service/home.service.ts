import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Http/baseUrl';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor(private http: HttpClient) {}

    GetSlide(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/All_Slide');
    }

    GetSanPhamGiamGia(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/GetSanPhamGiamGia');
    }

    GetSanPhamMoi(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/GetSanPhamMoi');
    }

    GetSanPhamBanChay(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/GetSanPhamBanChay');
    }
    GetHoaQua(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/GetHoaQua');
    }

    GetNuocEp(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/GetNuocEp');
    }
}
