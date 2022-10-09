/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { color } from 'echarts';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EstimationCategory } from '../models/estimation-category';

const BACKEND_URL =  environment.apiUrl + '/estimationCategories';

@Injectable({
  providedIn: 'root'
})

export class EstimationCategoriesService {

  private estimationCategories: EstimationCategory [];
  private estimationCategoriesUpdated= new Subject<{estimationCategories: EstimationCategory[]; estimationCategoriesCount: number}>();

  constructor(private http: HttpClient) { }

  getEstimationCategories() {
    this.http.get<{estimationCategories: any; maxEstimationCategories: any}>(BACKEND_URL)
    .pipe(
      map(estimationCategoriesData => ({
        estimationCategories: estimationCategoriesData.estimationCategories
            .map(estimationCat => ({
              id: estimationCat._id,
              title: estimationCat.title,
              color: estimationCat.color,
              icon: estimationCat.icon,
              parentCategory: estimationCat.parentCategory
            })),
        maxEstimationCategories: estimationCategoriesData.maxEstimationCategories
      }))).subscribe(transformedEstimationCategory => {
        this.estimationCategories = transformedEstimationCategory.estimationCategories;
        this.estimationCategoriesUpdated.next({
          estimationCategories: [...this.estimationCategories],
          estimationCategoriesCount: transformedEstimationCategory.maxEstimationCategories
        });
      });
  }

  getEstimationCategoriesUpdatedListener() {
    return this.estimationCategoriesUpdated.asObservable();
  }
}
