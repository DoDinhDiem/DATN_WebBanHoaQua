import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoficationComponent } from './nofication.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: NoficationComponent }]),
    ],
    exports: [RouterModule],
})
export class NoficationModule {}
