import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimony } from '../../interfaces/printer.interface';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialCarouselComponent {

  @Input() testimonials!: Testimony[];

  slidesPerView: number = 3;
  screenWidth!: number;

  ngOnInit(){
    if(typeof window !== "undefined"){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 576)
        this.slidesPerView = 1;
      else if(this.screenWidth >= 577)
        this.slidesPerView = 3;
    }
  }
}
