import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
// import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  result;
  constructor(private quizzService:QuizzService) { }

  ngOnInit() {
    this.result=this.quizzService.result;
  }

}
