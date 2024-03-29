import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NgxLazyElModule} from "@juristr/ngx-lazy-el";
import SharedModule from "src/app/shared/shared.module";
import {ServiesPageComponent} from "src/app/services/services-module/servies-page.component";
import {CapabilitiesComponent} from "src/app/services/components/capabilities/capabilities.component";
import {ZoomBoxComponent} from "src/app/services/components/zoom-box/zoom-box.component";
import {MeasuresComponent} from "src/app/services/components/measures/measures.component";

const servicesRoutes: Routes = [
  {path: '', component: ServiesPageComponent},
];

const lazyConfig = [{}];

@NgModule({
  declarations: [ServiesPageComponent, CapabilitiesComponent, MeasuresComponent, ZoomBoxComponent],
  imports: [
    RouterModule.forChild(servicesRoutes),
    CommonModule,
    NgxLazyElModule.forRoot(lazyConfig),
    SharedModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class ServicesModule {
}
