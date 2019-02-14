import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage implements OnInit  {

  points: number;
  numOfQuestions: number;
  correctness: number;
  duration: number;
  angle: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.points = navParams.get('points');
    this.numOfQuestions = navParams.get('numOfQuestions');
    this.correctness = this.points/this.numOfQuestions*100;
    this.duration = navParams.get('duration').toFixed(2);
  }

  ngOnInit() {
    this.angle = 90 - (180 * (this.correctness/100));
  }

  startQuiz() {
    this.navCtrl.push(QuestionPage);
  }
}
