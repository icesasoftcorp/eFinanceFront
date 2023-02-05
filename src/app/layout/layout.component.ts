import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  layoutType!: string;

  constructor() { }

  ngOnInit() {}

  /**
  * Check if the vertical layout is requested
  */
  isVerticalLayoutRequested() {
    return this.layoutType === "vertical";
  }
}
