import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen-spinner',
  templateUrl: './full-screen-spinner.component.html',
  styleUrls: ['./full-screen-spinner.component.scss'],
})
export class FullScreenSpinnerComponent implements OnInit {

  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {}

}
