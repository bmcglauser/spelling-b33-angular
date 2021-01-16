import { Component, OnInit } from '@angular/core';
import { SelectLetterService } from '../select-letter.service';

@Component({
  selector: 'app-honeycomb',
  templateUrl: './honeycomb.component.html',
  styleUrls: ['./honeycomb.component.scss']
})
export class HoneycombComponent implements OnInit {
  perimArr: string[];
  centerLetter: string;

  constructor(public selectLetterService: SelectLetterService) {
    this.perimArr = ['B', 'C', 'D', 'E', 'F', 'G'];
    this.centerLetter = 'A';
  }

  ngOnInit(): void {
  }

}
