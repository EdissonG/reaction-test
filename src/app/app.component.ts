import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // subscription: Subscription | undefined;
  startButtonText = 'Comenzar';
  hasGameStarted = false;
  hasGameCounterFinish = false;
  reactionTime = 0;
  hasGameFinished = false;

  startGame() {
      this.reactionTime = 0;
      this.startButtonText = 'PREPARATE'
      this.hasGameFinished = false;
      setTimeout(() => {
        this,this.hasGameStarted = true;
        this.reactionTime = new Date().getTime();
      }, Math.floor(Math.random()*11)* 1000)

    // this.subscription = interval(1000).subscribe(() => {
    //   if(this.counterToStartGame === 0) {
    //     this.hasGameCounterFinish = true;
    //     this.reactionTime = new Date().getTime();        
    //     return;
    //   }
    //   this.counterToStartGame = this.counterToStartGame-1
    // });


  }

  finishGame() {

    this.startButtonText = 'COMENZAR'
    this.reactionTime = new Date().getTime() - this.reactionTime;
    //this.subscription?.unsubscribe();
    this.hasGameFinished = true;
    //this.hasGameCounterFinish = false;
    this.hasGameStarted = false; 

  }

  showResults() {

  }

}
