import { Component, Input, OnInit } from '@angular/core';
import { EstimationCategory } from 'src/app/models/estimation-category';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
})
export class CategorySelectorComponent implements OnInit {

  @Input() estimationCategory: EstimationCategory;

  constructor() { }

  ngOnInit() {}

}
