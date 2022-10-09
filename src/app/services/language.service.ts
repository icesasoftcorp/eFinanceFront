import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LNG_KEY = 'SELECTED_LANGUAGE';
  selected = '';
  constructor(private translate: TranslateService, private plt: Platform) { }

  /**
   * Gets browser languages and selects the initial language
   */
  setInitialAppLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    this.setLanguage(language);
    return language;
  }

  /**
   * Sets de language
   *
   * @param language
   */
  setLanguage(language: string) {
    this.translate.use(language);
    this.selected = language;
  }

  getSelectedLanguage() {
    return this.selected;
  }
}
