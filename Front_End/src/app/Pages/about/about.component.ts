import { HeThongService } from './../../Service/he-thong.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent {
    constructor(private heThongService: HeThongService) {}

    ngOnInit() {
        this.GetGioiThieu();
    }
    gioiThieu: any;
    GetGioiThieu() {
        this.heThongService.GetGioiThieu().subscribe((data) => {
            this.gioiThieu = data;
        });
    }
}
