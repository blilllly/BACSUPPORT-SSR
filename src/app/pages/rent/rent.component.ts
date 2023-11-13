import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numero } from '../../interfaces/printer.interface';
import { environment } from '../../../environments/environment';
import { PrinterCarouselComponent } from '../../components/printer-carousel/printer-carousel.component';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [CommonModule, PrinterCarouselComponent],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;
}
