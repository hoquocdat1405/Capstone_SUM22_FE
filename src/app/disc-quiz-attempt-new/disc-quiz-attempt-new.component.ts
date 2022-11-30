import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disc-quiz-attempt-new',
  templateUrl: './disc-quiz-attempt-new.component.html',
  styleUrls: ['./disc-quiz-attempt-new.component.scss'],
})
export class DiscQuizAttemptNewComponent implements OnInit {
  id!: string | null;
  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Bài test DISC');
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
