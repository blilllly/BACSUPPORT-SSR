import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numero, Testimony } from '../../interfaces/printer.interface';
import { environment } from '../../../environments/environment';
import { TestimonialService } from '../../services/testimonial.service';
import { PrinterCarouselComponent } from '../../components/printer-carousel/printer-carousel.component';
import { BrandsCarouselComponent } from '../../components/brands-carousel/brands-carousel.component';
import { TestimonialCarouselComponent } from '../../components/testimonial-carousel/testimonial-carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PrinterCarouselComponent,
    BrandsCarouselComponent,
    TestimonialCarouselComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  testimonials: Testimony[] = [];

  constructor ( private testimonialService: TestimonialService ) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials()
      .subscribe( testimonials => {
        this.testimonials = testimonials;
      });
  }


  scrollToTop (){
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

}
