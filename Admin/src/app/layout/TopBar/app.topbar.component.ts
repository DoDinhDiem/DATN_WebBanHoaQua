import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
    selector: 'app-topbar',
    styleUrl: './app.topbar.scss',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private auth: AuthService
    ) {}
    logout() {
        this.auth.signOut();
    }
}
