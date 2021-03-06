import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanDisplayComponent } from './components/hangman-display/hangman-display.component';
import { HangmanQuestionComponent } from './components/hangman-question/hangman-question.component';
import { HangmanKeyboardComponent } from './components/hangman-keyboard/hangman-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanQuestionComponent,
    HangmanKeyboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
