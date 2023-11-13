import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimony } from '../interfaces/printer.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private baseUrl = 'https://blilllly.github.io/data/bacsupport/testimonials.json';

  constructor( private http: HttpClient ) { }

  getTestimonials(): Observable<Testimony[]> {
    return this.http.get<Testimony[]>(this.baseUrl);
  }
}
