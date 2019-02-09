import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';
import { SummaryPage } from '../pages/summary/summary';

import { HttpClientModule} from '@angular/common/http';
import { jsonReader } from '../jsonreader';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionPage,
    SummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionPage,
    SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    jsonReader
  ]
})

export class AppModule {}