import { Component, CUSTOM_ELEMENTS_SCHEMA, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CarouselComponent } from './shared/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent{
  title = 'BACSUPPORTSSR';
  isLoaded: boolean;

  constructor (){
    this.isLoaded = false;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.isLoaded = true;
    },3000)
    register();
  }
}
