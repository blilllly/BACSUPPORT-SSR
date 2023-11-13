import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Brand {
  img: string;
  alt: string;
}

@Component({
  selector: 'app-brands-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-carousel.component.html',
  styleUrl: './brands-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrandsCarouselComponent {

  brands: Brand[] = [
    { img: 'https://blilllly.github.io/images/bacsupport/brands/ricoh_logo.png', alt: 'RICOH' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/lanier_logo.png', alt: 'LANIER' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/intercopy_logo.png', alt: 'INTERCOPY' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/3m_logo.png', alt: '3M' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/ikon_logo.png', alt: 'IKON' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/xerox_logo.png', alt: 'XEROX' },
    { img: 'https://blilllly.github.io/images/bacsupport/brands/savin_logo.png', alt: 'SAVIN' }
  ];

  slidesPerView: number = 4;
  screenWidth!: number;

  ngOnInit(){
    if(typeof window !== "undefined"){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 576)
        this.slidesPerView = 2;
      else if(this.screenWidth >= 577)
        this.slidesPerView = 4;
    }
  }

}
