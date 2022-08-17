import { Router } from '@angular/router';
import { Tarot } from './../tarot-page/Tarot';
import { TarotServiceService } from './../tarot-page/tarot-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tarot-page',
  templateUrl: './new-tarot-page.component.html',
  styleUrls: ['./new-tarot-page.component.scss']
})
export class NewTarotPageComponent implements OnInit {
  currentTarot?: Tarot = {};
  cardActive: Boolean = false;
  leftCardTitle: String = "Rút bài ngẫu nhiên";

  constructor(private tarotService: TarotServiceService, private router: Router) { }

  ngOnInit(): void {
    this.currentTarot = this.getRandomTarot();
  }

  getRandomTarot(): Tarot {
    let randomPos = Math.floor(Math.random() * 78);
    const tarot = this.tarotService.getTarotByIndex(randomPos) ?? {};
    return tarot;
  }

  cardClick() {
    if (!this.cardActive) {
      this.currentTarot = this.getRandomTarot();
    }
    this.cardActive = !this.cardActive;

    if (this.cardActive) {
      this.leftCardTitle = "Nhấp vào để xem chi tiết";
    } else if (!this.cardActive) {
      this.leftCardTitle = "Rút bài ngẫu nhiên";
    }
  }

  viewAllCard() {
    this.router.navigate(['/tarot-list-page']);
  }

  viewRandomTarotPage() {
    this.router.navigate(['/random-tarot-page']);
  }
}
