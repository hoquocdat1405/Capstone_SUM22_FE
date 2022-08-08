import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<string>("Default");
  currentMessage = this.messageSource.asObservable();

  constructor(){ }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
