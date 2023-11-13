import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private scrollSubject = new Subject<void>();

  scroll$ = this.scrollSubject.asObservable();

  scrollToComponent() {
    this.scrollSubject.next();
  }

}
