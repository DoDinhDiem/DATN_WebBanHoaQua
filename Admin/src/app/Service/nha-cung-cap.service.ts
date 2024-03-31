import { Injectable } from '@angular/core';
import { baseUrl } from '../Http/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NhaCungCapService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(
            baseUrl + 'api/NhaCungCap/GetAll_NhaCungCap'
        );
    }
    create(NhaCungCap: any): Observable<any> {
        return this.http.post<any>(
            baseUrl + 'api/NhaCungCap/Create_NhaCungCap',
            NhaCungCap
        );
    }
    update(NhaCungCap: any) {
        return this.http.put<any>(
            baseUrl + 'api/NhaCungCap/Update_NhaCungCap',
            NhaCungCap
        );
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(
            baseUrl + 'api/NhaCungCap/Delete_NhaCungCap/' + id
        );
    }
    getById(id: any): Observable<any> {
        return this.http.get<any>(
            baseUrl + 'api/NhaCungCap/GetById_NhaCungCap/' + id
        );
    }
}
