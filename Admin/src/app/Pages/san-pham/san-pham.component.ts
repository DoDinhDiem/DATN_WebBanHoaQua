import { LoaiSanPhamService } from './../../Service/loai-san-pham.service';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { ISanPham } from 'src/app/Models/san-pham';
import { SanPhamService } from 'src/app/Service/san-pham.service';

@Component({
    selector: 'app-san-pham',
    templateUrl: './san-pham.component.html',
    styleUrl: './san-pham.component.scss',
    providers: [MessageService, ConfirmationService],
})
export class SanPhamComponent {
    baseUrl = baseUrl;

    title = 'Quản lý sản phẩm';

    sanpham!: ISanPham;

    sanphams!: ISanPham[];

    submitted: boolean = false;

    Dialog: boolean = false;

    Save = 'Lưu';

    constructor(
        private sanphamService: SanPhamService,
        private loaiService: LoaiSanPhamService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loai: any[] = [];
    selectedLoaiId: any;

    loadData() {
        this.loaiService.getAll().subscribe((data) => {
            this.loai = data.map((item) => ({
                id: item.id,
                name: item.tenLoai,
            }));
        });
        this.sanphamService.getAll().subscribe((data) => {
            this.sanphams = data;
        });
    }

    toggleTrangThai(sanpham: ISanPham) {
        this.sanphamService.toggleTrangThai(sanpham.id).subscribe(() => {
            this.loadData();
        });
    }
    openNew() {
        this.sanpham = {};
        this.shouldDisplayImage = false;
        this.fileOnly = null;
        this.selectedFiles = [];
        this.submitted = false;
        this.Dialog = true;
        this.Save = 'Lưu';
    }

    shouldDisplayImage: boolean = false;
    edit(sanpham: ISanPham) {
        this.sanphamService.getById(sanpham.id).subscribe((data) => {
            this.shouldDisplayImage = true;
            this.sanpham = data;
            this.selectedLoaiId = this.loai.find(
                (option) => option.name == data.tenLoai
            );
            this.fileOnly = { name: data.imageMain } as File;
            this.selectedFiles = data.imageList.map((item) => ({
                name: item.image,
            }));
            console.log(this.fileOnly);
            console.log(this.selectedFiles);

            this.Dialog = true;
            this.Save = 'Cập nhập';
        });
    }

    deleteOnly(sanpham: ISanPham) {
        this.confirmationService.confirm({
            message: 'Bạn có chắc chắn muốn xóa ' + sanpham.tenSanPham + '?',
            header: 'Thông báo',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.sanphamService.delete(sanpham.id!).subscribe((res) => {
                    this.loadData();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: res.message,
                        life: 3000,
                    });
                });
            },
        });
    }

    hidenDialog() {
        this.Dialog = false;
        this.sanpham = {};
        this.fileOnly = null;
        this.selectedFiles = [];
        this.submitted = false;
    }

    save() {
        this.sanpham.loaiSanPhamId = this.selectedLoaiId.id;
        this.sanpham.anhsanphams = [];
        if (this.fileOnly) {
            const file = this.fileOnly[0];
            const img = {
                image: file.name,
                trangThai: true,
            };
            this.sanpham.anhsanphams.push(img);
        }
        if (this.selectedFiles) {
            //Nhiều ảnh
            for (let i = 0; i < this.selectedFiles.length; i++) {
                const file = this.selectedFiles[i];
                const img = {
                    image: file.name,
                    trangThai: false,
                };
                this.sanpham.anhsanphams.push(img);
            }
        }
        if (this.fileOne || this.fileSelect) {
            this.onUpload();
            this.fileOne = false;
            this.fileSelect = false;
        }
        this.submitted = true;

        if (this.sanpham.tenSanPham) {
            if (this.sanpham.id) {
                this.sanphamService.update(this.sanpham).subscribe({
                    next: (res) => {
                        this.loadData();
                        this.hidenDialog();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Thông báo',
                            detail: res.message,
                            life: 3000,
                        });
                    },
                    error: (err) => {
                        this.loadData();
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Thông báo',
                            detail: 'Lỗi',
                            life: 3000,
                        });
                    },
                });
            } else {
                this.sanphamService.create(this.sanpham).subscribe({
                    next: (res) => {
                        this.loadData();
                        this.hidenDialog();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Thông báo',
                            detail: res.message,
                            life: 3000,
                        });
                    },
                    error: (err) => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Thông báo',
                            detail: 'Lỗi',
                            life: 3000,
                        });
                    },
                });
            }
        }
    }

    //Ảnh sản phẩm
    fileOnly: any;
    selectedFiles: any[];
    sequenceNumber = 0;
    fileOne: boolean = false;
    fileSelect: boolean = false;

    //Upload
    onFilesSelected(event) {
        const files: FileList = event.target.files;
        if (files.length > 0) {
            this.fileSelect = true;
            this.selectedFiles = Array.from(files).map((file) => {
                const newName = this.generateNewFileName(file.name);
                return new File([file], newName, { type: file.type });
            });
        } else {
            this.fileSelect = false;
        }
    }

    onFileOnly(event) {
        const files: FileList = event.target.files;
        if (files.length > 0) {
            this.fileOne = true;
            this.fileOnly = Array.from(files).map((file) => {
                const newName = this.generateNewFileName(file.name);
                return new File([file], newName, { type: file.type });
            });
        } else {
            this.fileOne = false;
        }
    }

    generateNewFileName(oldFileName: string): string {
        const timestamp = new Date().getTime();
        const extension = oldFileName.split('.').pop();
        const newFileName = `product_${timestamp}_${this.sequenceNumber}.${extension}`;
        this.sequenceNumber++;
        return newFileName;
    }
    onUpload() {
        if (this.selectedFiles && this.selectedFiles.length > 0) {
            this.sanphamService.uploadFiles(this.selectedFiles).subscribe({
                next: (response) => {
                    // Add any further handling code here
                },
                error: (err) => {},
            });
        }
        if (this.fileOnly && this.fileOnly.length > 0) {
            this.sanphamService.uploadFiles(this.fileOnly).subscribe({
                next: (response) => {
                    // Add any further handling code here
                },
                error: (err) => {},
            });
        }
    }
}
