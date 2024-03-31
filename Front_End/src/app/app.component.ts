import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit() {
        // Tạo phần tử script cho các thư viện bạn muốn sử dụng
        const scripts = [
            'assets/Client/libs/jquery/jquery.js',
            'assets/Client/libs/bootstrap/js/bootstrap.js',
            'assets/Client/libs/jquery.countdown/jquery.countdown.js',
            'assets/Client/libs/nivo-slider/js/jquery.nivo.slider.js',
            // 'assets/Client/libs/owl.carousel/owl.carousel.min.js',
            'assets/Client/libs/slider-range/js/tmpl.js',
            'assets/Client/libs/slider-range/js/jquery.dependClass-0.1.js',
            'assets/Client/libs/slider-range/js/draggable-0.1.js',
            'assets/Client/libs/slider-range/js/jquery.slider.js',
            'assets/Client/libs/elevatezoom/jquery.elevatezoom.js',
            'assets/Client/js/main.js',
        ];

        // Lặp qua từng script và thêm chúng vào thẻ body
        scripts.forEach((src) => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    }
}
