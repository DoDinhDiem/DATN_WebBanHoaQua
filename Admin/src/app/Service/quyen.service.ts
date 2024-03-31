import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../Http/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QuyenService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(baseUrl + 'api/Quyen/GetAll_Quyen');
    }
    create(Quyen: any): Observable<any> {
        return this.http.post<any>(baseUrl + 'api/Quyen/Create_Quyen', Quyen);
    }
    update(Quyen: any) {
        return this.http.put<any>(baseUrl + 'api/Quyen/Update_Quyen', Quyen);
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(baseUrl + 'api/Quyen/Delete_Quyen/' + id);
    }
    getById(id: any): Observable<any> {
        return this.http.get<any>(baseUrl + 'api/Quyen/GetById_Quyen/' + id);
    }
}
