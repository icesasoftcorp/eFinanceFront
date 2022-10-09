import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EstimationCategory } from 'src/app/models/estimation-category';
import { EstimationCategoriesService } from 'src/app/services/estimation-categories.service';
import { EstimationsService } from 'src/app/services/estimations.service';

@Component({
  selector: 'app-estimation-form',
  templateUrl: './estimation-form.component.html',
  styleUrls: ['./estimation-form.component.scss'],
})
export class EstimationFormComponent implements OnInit {

  rootEstimationCategories: EstimationCategory [] = [];
  totalEstimationCategories = 0;
  category: string;
  private estimationCategorySubscription: Subscription;

  constructor(
    private estimationCategoryService: EstimationCategoriesService,
    private estimationService: EstimationsService
    ) { }

  ngOnInit() {
    this.estimationCategoryService.getEstimationCategories();
    this.estimationCategorySubscription = this.estimationCategoryService.getEstimationCategoriesUpdatedListener()
    .subscribe(
      (estimationCategoriesData: {estimationCategories: EstimationCategory[]; estimationCategoriesCount: number}) => {
        this.rootEstimationCategories = estimationCategoriesData.estimationCategories;
        this.totalEstimationCategories = estimationCategoriesData.estimationCategoriesCount;
        console.log(this.rootEstimationCategories, 'estimations');
      });
  }

  setCategory(category: string) {
    this.category = category;
  }

  onSaveEstimation(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }

    this.estimationService.addEstimation(
      ngForm.value.title,
      ngForm.value.amount,
      this.category,
    );
  }
}
