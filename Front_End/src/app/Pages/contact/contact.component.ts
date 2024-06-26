import { Component } from '@angular/core';
import { HeThongService } from 'src/app/Service/he-thong.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
    constructor(private heThongService: HeThongService) {}

    ngOnInit() {
        this.GetLienHe();
    }

    contact: any = {};
    GetLienHe() {
        this.heThongService.GetLienHe().subscribe((data) => {
            this.contact = data;
        });
    }
}
