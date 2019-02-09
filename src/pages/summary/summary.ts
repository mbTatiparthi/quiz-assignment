import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

  points: number;
  numOfQuestions: number;
  correctness: number;
  duration: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.points = navParams.get('points');
    this.numOfQuestions = navParams.get('numOfQuestions');
    this.correctness = this.points/this.numOfQuestions*100;
    this.duration = navParams.get('duration');
  }

  ionViewDidLoad() {
  }

  startQuiz() {
    this.navCtrl.push(QuestionPage);
  }
}
