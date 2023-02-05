import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomePage } from "./home/home.page";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";

@NgModule({
    declarations:[
        HomePage
    ],
    imports:[
        SimplebarAngularModule,
        NgbDropdownModule
    ]
})
export class PagesModule{}