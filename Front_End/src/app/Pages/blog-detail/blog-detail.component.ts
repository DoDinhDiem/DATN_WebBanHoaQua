import { HeThongService } from './../../Service/he-thong.service';
import { NewsPaperService } from './../../Service/news-paper.service';
import { baseUrl } from 'src/app/Http/baseUrl';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
    baseUrl = baseUrl;

    constructor(
        private newsPaperService: NewsPaperService,
        private heThongService: HeThongService,
        private route: ActivatedRoute
    ) {}
    id!: any;

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.GetChiTietSanPham(this.id);
        });
        this.GetLoaiSanPham();
    }

    loaiSanPham: any[] = [];
    GetLoaiSanPham() {
        this.heThongService.GetLoaiSanPham().subscribe((data) => {
            this.loaiSanPham = data;
        });
    }

    tinTuc: any;
    GetChiTietSanPham(id: any) {
        this.newsPaperService.GetTinTucById(id).subscribe((data) => {
            this.tinTuc = data;
            console.table(data);
            this.GetTinTucTuongTu(id);
        });
    }

    tinTucTuongTu: any[] = [];
    GetTinTucTuongTu(id: any) {
        this.newsPaperService.GetTinTucTuongTu(id).subscribe((data) => {
            this.tinTucTuongTu = data;
            console.table(data);
        });
    }
}
