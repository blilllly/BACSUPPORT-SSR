import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Printer } from '../../interfaces/printer.interface';
import { ComunicationService } from '../../services/comunication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-printer-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './printer-card.component.html',
  styleUrl: './printer-card.component.css'
})
export class PrinterCardComponent {

  @Input() printer!: Printer;

  constructor(private comunicationService: ComunicationService) {}

  scroll() {
    this.comunicationService.scrollToComponent();
  }

}
