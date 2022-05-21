import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  question: string = '';
  questions: string[] = [];
  guesses: string[] = [];
  category: string = '';
  
  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getQuestions().subscribe((response) => {
      this.questions = response.items;
      this.category = response.category;
      this.selectNewWord();
    });
  }

  selectNewWord() {
    console.log(this.questions);
  }

}
