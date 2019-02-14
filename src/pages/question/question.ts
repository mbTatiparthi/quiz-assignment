import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizQuestion } from '../../quizquestion';
import { jsonReader} from '../../jsonreader';
import { SummaryPage} from '../summary/summary';


@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage implements OnInit {
  
  questions: QuizQuestion[] = [];
  activeQuestion: QuizQuestion;
  feedback: string;
  questionCounter: number = 0;
  correctAnswerCounter: number = 0;
  disableButton: boolean;
  allQuestionsAsked: boolean = false;
  startTime: any;
  endTime: any;
  duration: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private jsonreader: jsonReader) {
  }

  ngOnInit() {   
    this.jsonreader.getJSON().subscribe(data => {
      this.setDataFromJson(data);
      this.setQuestion();
      this.startTime = new Date();
    });
  }

  setDataFromJson(data: any) {
    this.questions = data.questions;
  }

  setQuestion() {  
    this.disableButton = false;
    if(this.questionCounter == this.questions.length) {
      this.questionCounter = 0;
      
    }
    this.feedback = '';
    this.activeQuestion = this.questions[this.questionCounter];
    this.questionCounter++;
  }

  checkOption(option, activeQuestion) {  
    this.disableButton = true;

    if(option == activeQuestion.correctOption) {
      this.feedback = 'CORRECT!';
      this.correctAnswerCounter++;
    } else {
      this.feedback = 'INCORRECT!';
    }

    this.showAnswer(option, activeQuestion); 

    if(this.questionCounter == this.questions.length) {
      this.allQuestionsAsked = true;
      this.countDuration();
    }
  }

  countDuration() {
    this.endTime = new Date();
    this.duration = Math.abs(this.startTime - this.endTime) / 1000;
  }

  showAnswer(option, activeQuestion) {
    // activeQuestion.correctOption = green
    // if (!isCorrect) selectedOption = red
  }

  seeSummary() {
    this.navCtrl.push(SummaryPage, {
      points: this.correctAnswerCounter,
      numOfQuestions: this.questions.length,
      duration: this.duration
    });
  }
}
