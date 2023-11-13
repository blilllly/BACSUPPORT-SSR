import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Printer } from '../interfaces/printer.interface';

@Injectable({
  providedIn: 'root'
})
export class PrintersService {

  private baseUrl = 'https://blilllly.github.io/data/bacsupport/printers.json';

  constructor( private http: HttpClient ) { }

  getPrinters(): Observable<Printer[]> {
    return this.http.get<Printer[]>(this.baseUrl);
  }

  getPrinterXId(id: number): Observable<Printer> {
    return this.http.get<Printer[]>(this.baseUrl)
      .pipe(
        map( (data: Printer[]) => {
          const printer = data.find( item => item.id == id);
          if ( printer ) { return printer ;}
          else { throw new Error('No se encontró printer con ID ${id}'); }
        })
      );
  }

}
