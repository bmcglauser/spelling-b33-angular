import { Component, OnInit } from '@angular/core';
import { AllLettersService } from '../all-letters.service';
import { ScoreService } from '../score.service';
import { SelectLetterService } from '../select-letter.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public selectLetterService: SelectLetterService,
    public allLettersService: AllLettersService,
    public scoreService: ScoreService
    ) { }

  ngOnInit(): void {
  }
  checkWord(x:string) {
    const y = Math.random();
    return (y > .5) ? true : false;
  }
  submitWord(): void {
    let centerPresent = false;
    const { selectedLetters, clear } = this.selectLetterService;
    for (let letter of selectedLetters) {
      if (letter === this.allLettersService.centerLetter) centerPresent = true;
    }
    let word = selectedLetters.join('');
    if (!word.length || word.length < 4) {
      console.log('too short')
      // too short
    } else if (!centerPresent) {
      console.log('no center')
      // no center
    } else if (this.checkWord(word)) {
      this.scoreService.addFound(word);
      console.log('good word')
      console.log(this.scoreService.totalPoints)
      // good word message
    } else {
      console.log('not a word')
      // not a word message
    }
    clear();
  }

}
