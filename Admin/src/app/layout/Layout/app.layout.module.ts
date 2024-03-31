import { NhanVienComponent } from './../../Pages/nhan-vien/nhan-vien.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';

import { AppMenuComponent } from '../Menu/app.menu.component';
import { AppMenuitemComponent } from '../MenuItiem/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from '../TopBar/app.topbar.component';
import { AppFooterComponent } from '../Footer/app.footer.component';
import { AppConfigModule } from '../config/config.module';
import { AppSidebarComponent } from '../MenuTop/app.sidebar.component';
import { AppLayoutComponent } from './app.layout.component';

import { LoaiSanPhamComponent } from 'src/app/Pages/loai-san-pham/loai-san-pham.component';
import { SanPhamComponent } from 'src/app/Pages/san-pham/san-pham.component';
import { NhaCungCapComponent } from 'src/app/Pages/nha-cung-cap/nha-cung-cap.component';

import { LoaiSanPhamModule } from 'src/app/Pages/loai-san-pham/loai-san-pham.module';
import { SanPhamModule } from 'src/app/Pages/san-pham/san-pham.module';
import { NhaCungCapModule } from 'src/app/Pages/nha-cung-cap/nha-cung-cap.module';
import { GioiThieuComponent } from 'src/app/Pages/gioi-thieu/gioi-thieu.component';
import { GioiThieuModule } from 'src/app/Pages/gioi-thieu/gioi-thieu.module';
import { LienHeComponent } from 'src/app/Pages/lien-he/lien-he.component';
import { SlideComponent } from 'src/app/Pages/slide/slide.component';
import { LienHeModule } from 'src/app/Pages/lien-he/lien-he.module';
import { SlideModule } from 'src/app/Pages/slide/slide.module';
import { SafePipe } from 'src/app/Pages/lien-he/safe.pipe';
import { QuyenComponent } from 'src/app/Pages/quyen/quyen.component';
import { QuyenModule } from 'src/app/Pages/quyen/quyen.module';
import { NhanVienModule } from 'src/app/Pages/nhan-vien/nhan-vien.module';
import { HoaDonNhapComponent } from 'src/app/Pages/hoa-don-nhap/hoa-don-nhap.component';
import { HoaDonNhapModule } from 'src/app/Pages/hoa-don-nhap/hoa-don-nhap.module';
import { HoaDonBanComponent } from 'src/app/Pages/hoa-don-ban/hoa-don-ban.component';
import { HoaDonBanModule } from 'src/app/Pages/hoa-don-ban/hoa-don-ban.module';
import { LoginComponent } from 'src/app/Pages/login/login.component';
import { LoginModule } from 'src/app/Pages/login/login.module';
import { KhachHangComponent } from 'src/app/Pages/khach-hang/khach-hang.component';
import { KhachHangModule } from 'src/app/Pages/khach-hang/khach-hang.module';
import { DashboardComponent } from 'src/app/Pages/dashboard/dashboard.component';
import { DashboardModule } from 'src/app/Pages/dashboard/dashboard.module';
import { TinTucComponent } from 'src/app/Pages/tin-tuc/tin-tuc.component';
import { TinTucModule } from 'src/app/Pages/tin-tuc/tin-tuc.module';

@NgModule({
    declarations: [
        LoaiSanPhamComponent,
        SanPhamComponent,
        NhaCungCapComponent,
        GioiThieuComponent,
        LienHeComponent,
        SlideComponent,
        SafePipe,
        QuyenComponent,
        NhanVienComponent,
        HoaDonNhapComponent,
        HoaDonBanComponent,
        LoginComponent,
        KhachHangComponent,
        DashboardComponent,
        TinTucComponent,

        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        LoaiSanPhamModule,
        SanPhamModule,
        NhaCungCapModule,
        GioiThieuModule,
        LienHeModule,
        SlideModule,
        QuyenModule,
        NhanVienModule,
        HoaDonNhapModule,
        HoaDonBanModule,
        LoginModule,
        KhachHangModule,
        DashboardModule,
        TinTucModule,

        //PrimeNG
        BrowserModule,
        AvatarModule,
        AvatarGroupModule,
        AppConfigModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RippleModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        BadgeModule,
        BreadcrumbModule,
        BlockUIModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        ColorPickerModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ContextMenuModule,
        VirtualScrollerModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DockModule,
        DragDropModule,
        DropdownModule,
        DynamicDialogModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        InplaceModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        ImageModule,
        KnobModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrganizationChartModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SelectButtonModule,
        SidebarModule,
        ScrollerModule,
        ScrollPanelModule,
        ScrollTopModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SpeedDialModule,
        SpinnerModule,
        SplitterModule,
        SplitButtonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TriStateCheckboxModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        AnimateModule,
        CardModule,
        RouterModule,
    ],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
