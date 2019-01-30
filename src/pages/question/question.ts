import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizQuestion } from '../../quizquestion';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
      this.questions = [{
        question: "What´s name of the actor of Terminator?",
        options: [
          "Arnold",
          "Sampsa",
          "Jesus"],
        correctOption: 1
      },
      {
        question: "What´s name of the actor of Superman?",
        options: [
          "Arnold",
          "Sampsa",
          "Jesus"],
        correctOption: 0
      }
    ]

    this.questionCounter = 0;
    this.setQuestion();
  }

  setQuestion() {
    if(this.questionCounter == this.questions.length) {
      this.questionCounter = 0;
    }
    this.feedback = '';
    this.activeQuestion = this.questions[this.questionCounter];
    this.questionCounter++;
  }

  checkOption(option, activeQuestion) {
    if(option == activeQuestion.correctOption) {
      this.feedback = 'CORRECT!';
      this.correctAnswerCounter++;
    } else {
      this.feedback = 'INCORRECT!';
    }

    setInterval(() => {
      this.setQuestion();
    }, 2000);
    //this.setQuestion();
  }
}
