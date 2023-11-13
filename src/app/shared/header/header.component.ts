import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Numero } from '../../interfaces/printer.interface';
import { environment } from '../../../environments/environment';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  texto: string;
  subItems?: MenuItem[];
  ruta?: string;
  emoji?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  numero1: Numero = environment.numero1;
  numero2: Numero = environment.numero2;
  correo: string = environment.correo;

  constructor(private renderer: Renderer2) {}

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    this.renderer.removeClass(navbar, 'show');
  }

  NavBarMenu: MenuItem[]= [
    { texto: 'inicio', ruta: '/home', emoji: 'ri-home-2-line' },
    { texto: 'impresoras', emoji: 'ri-printer-line', subItems: [
        { texto: 'venta', ruta: '/printers', emoji: 'ri-store-3-fill'},
        { texto: 'alquiler', ruta: '/rent', emoji: 'ri-money-dollar-circle-line'},
      ]
    },
    { texto: 'servicio técnico',ruta: '/technical-service', emoji: 'ri-tools-fill'},
    { texto: 'repuestos y suministros', ruta: '/supplies', emoji: 'ri-shopping-bag-line' }
  ];

}
