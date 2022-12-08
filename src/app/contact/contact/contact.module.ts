import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from "src/app/contact/contact/contact.component";
import {RouterModule, Routes} from "@angular/router";
import SharedModule from "src/app/shared/shared.module";
import { HeaderComponent } from '../components/header/header.component';
import {BigBoxComponent} from "../components/big-box/big-box.component";


const contactRoutes: Routes = [
  {path: '', component: ContactComponent},
];

@NgModule({
  declarations: [ContactComponent, HeaderComponent, BigBoxComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(contactRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ContactModule {
}
