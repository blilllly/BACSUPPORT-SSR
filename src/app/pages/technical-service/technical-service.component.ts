import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numero, Testimony } from '../../interfaces/printer.interface';
import { environment } from '../../../environments/environment';
import { TestimonialService } from '../../services/testimonial.service';
import { TestimonialCarouselComponent } from '../../components/testimonial-carousel/testimonial-carousel.component';

@Component({
  selector: 'app-technical-service',
  standalone: true,
  imports: [CommonModule, TestimonialCarouselComponent],
  templateUrl: './technical-service.component.html',
  styleUrl: './technical-service.component.css'
})
export class TechnicalServiceComponent {

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  testimonials: Testimony[] = [];

  constructor ( private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials()
      .subscribe( testimonials => {
        this.testimonials = testimonials;
      });
  }

}
