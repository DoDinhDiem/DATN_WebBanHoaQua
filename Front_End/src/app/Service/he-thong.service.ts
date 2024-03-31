import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Http/baseUrl';

@Injectable({
    providedIn: 'root',
})
export class HeThongService {
    constructor(private http: HttpClient) {}

    GetLoaiSanPham(): Observable<any[]> {
        return this.http.get<any>(baseUrl + 'api/User/All_Loai');
    }

    GetSearchSanPham(key: string): Observable<any[]> {
        const params = `?key=${key}`;
        return this.http.get<any[]>(
            baseUrl + `api/User/GetSearchSanPham${params}`
        );
    }

    GetGioiThieu(): Observable<any> {
        return this.http.get<any>(baseUrl + 'api/User/GetGioiThieu');
    }

    GetLienHe(): Observable<any> {
        return this.http.get<any>(baseUrl + 'api/User/GetLienHe');
    }
}
