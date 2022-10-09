import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-movement-item',
  templateUrl: './movement-item.component.html',
  styleUrls: ['./movement-item.component.scss'],
})
export class MovementItemComponent implements OnInit {
  @Input() title: string;
  @Input() date: string;
  @Input() category: string;
  @Input() amount: number;
  @Input() isExpense = false;
  lang: string;

  color = 'success';
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.color = this.isExpense ? 'danger' : 'primary';
    this.lang = this.languageService.getSelectedLanguage();
  }

}
