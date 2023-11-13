import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numero } from '../../interfaces/printer.interface';
import { environment } from '../../../environments/environment';
import { BrandsCarouselComponent } from '../../components/brands-carousel/brands-carousel.component';

@Component({
  selector: 'app-supplies',
  standalone: true,
  imports: [CommonModule, BrandsCarouselComponent],
  templateUrl: './supplies.component.html',
  styleUrl: './supplies.component.css'
})
export class SuppliesComponent {
  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;
}
