import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SimplebarAngularModule } from "simplebar-angular";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [
      LayoutComponent,
      VerticalComponent,
      TopbarComponent,
      SidebarComponent
    ],
    imports: [
      BrowserModule,
      RouterModule,
      NgbDropdownModule,
      NgbNavModule,
      SimplebarAngularModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }),
    //   AppRoutingModule,
      HttpClientModule,
    ],
    // bootstrap: [AppComponent],
  })
  export class LayoutModule {}
  