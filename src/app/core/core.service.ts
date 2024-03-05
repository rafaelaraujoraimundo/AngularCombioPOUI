import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private signalSubject = new Subject<any>();

  // Método para emitir um sinal
  emitSignal(data: any) {
    this.signalSubject.next(data);
  }

  // Método para se inscrever no sinal
  getSignalObservable() {
    return this.signalSubject.asObservable();
  }

}
