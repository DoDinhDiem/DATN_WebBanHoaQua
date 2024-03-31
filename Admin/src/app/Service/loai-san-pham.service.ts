import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Http/baseUrl';

@Injectable({
    providedIn: 'root',
})
export class LoaiSanPhamService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(baseUrl + 'api/LoaiSanPham/GetAll_Loai');
    }
    create(Loai: any): Observable<any> {
        return this.http.post<any>(
            baseUrl + 'api/LoaiSanPham/Create_Loai',
            Loai
        );
    }
    update(Loai: any) {
        return this.http.put<any>(
            baseUrl + 'api/LoaiSanPham/Update_Loai',
            Loai
        );
    }
    toggleTrangThai(id: any) {
        return this.http.put<any>(
            baseUrl + `api/LoaiSanPham/TrangThai/${id}`,
            null
        );
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(
            baseUrl + 'api/LoaiSanPham/Delete_Loai/' + id
        );
    }
    getById(id: any): Observable<any> {
        return this.http.get<any>(
            baseUrl + 'api/LoaiSanPham/GetById_Loai/' + id
        );
    }

    uploadFile(file: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);

        return this.http.post(
            baseUrl + 'api/LoaiSanPham/Upload_Image',
            formData
        );
    }
}
