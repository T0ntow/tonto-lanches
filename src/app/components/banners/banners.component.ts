import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  images = [
    'https://s2.glbimg.com/r_e2zXMes2ZhKBM6MTn7tQrPxJ0=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/B/1/xpLKMfSmSKBw0ff9mZmQ/capa-pr-v2.png',
    'https://d23vje10llbspb.cloudfront.net/uploads/2022/03/0296a691b84b4d14881d1846e520de39_cms-1646689926357-whatsapp-image-2022-03-04-at-115958jpeg.jpeg',
    'https://blog-parceiros.ifood.com.br/wp-content/uploads/2022/07/banner-3.png'
  ];
  currentImageIndex = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000)
   
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex + this.images.length - 1) % this.images.length;
  }

}
