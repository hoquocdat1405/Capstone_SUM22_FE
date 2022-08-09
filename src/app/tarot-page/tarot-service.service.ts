import { Tarot } from './Tarot';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TAROTS } from './tarot-data';

@Injectable({
  providedIn: 'root'
})
export class TarotServiceService {
  private currentShowTarotDetailSource = new BehaviorSubject<Object>({});
  currentObject = this.currentShowTarotDetailSource.asObservable();
  tarot: Tarot = {
    name: "",
    pos: -1,
    url: "",
    description: ""
  };

  constructor() { }

  getTarots() {
    return TAROTS;
  }

  getTarotByIndex(pos: Number): Tarot {
    let obj = TAROTS.find(o => o.pos === pos);
    this.tarot.name = obj?.name;
    this.tarot.description = obj?.description;
    this.tarot.pos = obj?.pos;
    this.tarot.url = obj?.url;
    return this.tarot;
  }

  changeObject(currentShowTarot:Object) {
    this.currentShowTarotDetailSource.next(currentShowTarot);
  }
}
