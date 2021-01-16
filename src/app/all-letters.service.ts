import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllLettersService {
  centerLetter: string;
  perimLetters: string[];

  constructor() {
    this.centerLetter = 'A';
    this.perimLetters = ['B','C','D','E','F','G'];
  }

  setCenterLetter(s: string) {
    this.centerLetter = s;
  }
  setPerimLetters(sArr: string[]) {
    this.perimLetters = sArr;
  }
  scramblePerimLetters() {
    let arrayToRandomize = [...this.perimLetters];
    let randomizedArr: string[] = [];
    for (let i = 0; i < 6; i++) {
      let x = Math.floor(Math.random() * (6 - i));
      let el = arrayToRandomize[x];
      arrayToRandomize.splice(x, 1);
      randomizedArr.push(el);
    }
    this.perimLetters = randomizedArr;
  }
}
