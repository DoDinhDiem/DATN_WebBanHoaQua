import { Component } from '@angular/core';
import { baseUrl } from 'src/app/Http/baseUrl';
import { NewsPaperService } from 'src/app/Service/news-paper.service';

@Component({
    selector: 'app-blog-category',
    templateUrl: './blog-category.component.html',
    styleUrls: ['./blog-category.component.css'],
})
export class BlogCategoryComponent {
    baseUrl = baseUrl;

    constructor(private newsPaperService: NewsPaperService) {}

    ngOnInit() {
        this.GetTinTuc();
    }

    newpaper: any;
    GetTinTuc() {
        this.newsPaperService.GetTinTuc().subscribe((data) => {
            this.newpaper = data;
        });
    }

    //Phân trang
    p: number = 1;
}
