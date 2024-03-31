import { baseUrl } from './../../Http/baseUrl';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ILoaiSanPham } from 'src/app/Models/loai-san-pham';
import { LoaiSanPhamService } from 'src/app/Service/loai-san-pham.service';

interface action {
    value: boolean;
    name: string;
}
@Component({
    selector: 'app-loai-san-pham',
    templateUrl: './loai-san-pham.component.html',
    styleUrl: './loai-san-pham.component.scss',
    providers: [MessageService, ConfirmationService],
})
export class LoaiSanPhamComponent implements OnInit {
    baseUrl = baseUrl;

    title = 'Quản lý loại sản phẩm';

    loai!: ILoaiSanPham;

    loais!: ILoaiSanPham[];

    submitted: boolean = false;

    Dialog: boolean = false;

    Save = 'Lưu';

    constructor(
        private loaiService: LoaiSanPhamService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.loaiService.getAll().subscribe((data) => {
            this.loais = data;
        });
    }

    toggleTrangThai(loai: ILoaiSanPham) {
        this.loaiService.toggleTrangThai(loai.id).subscribe(() => {
            this.loadData();
        });
    }
    openNew() {
        this.loai = {};
        this.fileOnly = null;
        this.shouldDisplayImage = false;
        this.submitted = false;
        this.Dialog = true;
        this.Save = 'Lưu';
    }

    shouldDisplayImage: boolean = false;
    edit(loai: ILoaiSanPham) {
        this.loaiService.getById(loai.id).subscribe((data) => {
            this.loai = data;
            this.shouldDisplayImage = true;
            this.fileOnly = { name: data.icon } as File;
            this.Dialog = true;
            this.Save = 'Cập nhập';
        });
    }

    deleteOnly(loai: ILoaiSanPham) {
        this.confirmationService.confirm({
            message: 'Bạn có chắc chắn muốn xóa ' + loai.tenLoai + '?',
            header: 'Thông báo',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.loaiService.delete(loai.id!).subscribe((res) => {
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
        this.loai = {};
        this.fileOnly = null;
        this.shouldDisplayImage = false;
        this.submitted = false;
    }

    save() {
        if (this.fileOnly) {
            this.loai.icon = this.fileOnly.name;
        }
        if (this.fileOne) {
            this.onUpload();
            this.fileOne = false;
        }
        this.submitted = true;

        if (this.loai.tenLoai) {
            if (this.loai.id) {
                this.loaiService.update(this.loai).subscribe({
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
                this.loaiService.create(this.loai).subscribe({
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

    fileOnly: File;
    sequenceNumber = 0;
    fileOne: boolean = false;
    onFileOnly(event) {
        const files: FileList = event.target.files;
        if (files.length > 0) {
            this.fileOne = true;
            const file = files[0];
            const newName = this.generateNewFileName(file.name);
            this.fileOnly = new File([file], newName, { type: file.type });
        } else {
            this.fileOne = false;
        }
    }

    generateNewFileName(oldFileName: string): string {
        const timestamp = new Date().getTime();
        const extension = oldFileName.split('.').pop();
        const newFileName = `loaisp_${timestamp}_${this.sequenceNumber}.${extension}`;
        this.sequenceNumber++;
        return newFileName;
    }
    onUpload() {
        this.loaiService.uploadFile(this.fileOnly).subscribe({
            next: (response) => {},
            error: (err) => {},
        });
    }
}
