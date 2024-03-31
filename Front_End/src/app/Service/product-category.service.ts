import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Http/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductCategoryService {
    constructor(private http: HttpClient) {}
    GetSanPhamByLoai(id: any, sapxep: any, giaMax: any): Observable<any[]> {
        const params = `?id=${id}&sapXep=${sapxep}&giaMax=${giaMax}`;
        return this.http.get<any[]>(
            baseUrl + `api/User/GetSanPhamToLoai${params}`
        );
    }

    GetGiaLonNhatTheoLoai(id: any) {
        return this.http.get<any>(baseUrl + 'api/User/GetPriceMax/' + id);
    }
}
