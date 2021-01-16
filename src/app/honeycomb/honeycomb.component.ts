import { Component, OnInit } from '@angular/core';
import { AllLettersService } from '../all-letters.service';
import { SelectLetterService } from '../select-letter.service';

@Component({
  selector: 'app-honeycomb',
  templateUrl: './honeycomb.component.html',
  styleUrls: ['./honeycomb.component.scss']
})
export class HoneycombComponent implements OnInit {

  constructor(
    public selectLetterService: SelectLetterService,
    public allLettersService: AllLettersService
    ) {
  }

  ngOnInit(): void {
  }

}
