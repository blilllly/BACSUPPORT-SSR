import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimony } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {

  @Input() testimony!: Testimony;

  getStars(score: number): string[] {
    const fullStars = Math.floor(score); //Redondeo el score hacia abajo para calcular las estrellas llenas
    const halfStar = score - fullStars === 0.5;  //Verifica si hay score .5

    const stars = [];
    //push de estrellas llenas
    for (let i=0 ; i<fullStars; i++)
      stars.push('ri-star-fill');
    //push de estrella a la mitad
    if (halfStar)
      stars.push('ri-star-half-line');
    //Agrega estrallas vacías si el arreglo no llega a 5 elementos
    const rmnStars = 5 - stars.length;
    for (let i=0; i<rmnStars; i++)
      stars.push('ri-star-line');

    return stars
  }

}
