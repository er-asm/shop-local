import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('linearAnimation', [
      transition('* <=> *', [
        style({ transform: 'translateX(0%)' }),
        animate('500ms linear', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit{

  sliderImageWidth = document.getElementById('sliderImg')?.offsetWidth;
  currentImageIndex=0;
  isPaused = false;

  ngOnInit(): void {
    this.preloadImages();
    this.startImageSlider();
  }

  sliderImages:string[] = [
    "assets/sider/slider-2.jpg",
    "assets/sider/slider-1.jpg",
    "assets/sider/banner-sale.avif",
  ]

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isPaused = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isPaused = false;
  }
  preloadImages() {
    this.sliderImages.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }
  startImageSlider() {
    setInterval(() => {
       if (!this.isPaused) {
          this.prevSlide();
       }
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }
  selectImage(index: number) {
    this.currentImageIndex = index;
  }
  prevSlide(){
    console.log('left clicked ')
    this.currentImageIndex = (this.currentImageIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
  }
  nextSlide(){
    console.log('right clicked ')
    this.currentImageIndex = (this.currentImageIndex + 1) % this.sliderImages.length;
  }

}
