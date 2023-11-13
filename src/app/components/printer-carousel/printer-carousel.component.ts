import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Printer } from '../../interfaces/printer.interface';
import { PrintersService } from '../../services/printers.service';
import { PrinterCardComponent } from '../printer-card/printer-card.component';

@Component({
  selector: 'app-printer-carousel',
  standalone: true,
  imports: [CommonModule, PrinterCardComponent],
  templateUrl: './printer-carousel.component.html',
  styleUrl: './printer-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrinterCarouselComponent {

  slidesPerView: number = 4;
  screenWidth!: number;

  printers: Printer[] = [];

  constructor(private printersService: PrintersService) {}

  ngOnInit(): void {
    this.printersService.getPrinters()
      .subscribe( data => {
        this.printers = data;
      });

    if(typeof window !== "undefined"){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 576)
        this.slidesPerView = 1;
      else if(this.screenWidth >= 577)
        this.slidesPerView = 4;
    }
  }

}
