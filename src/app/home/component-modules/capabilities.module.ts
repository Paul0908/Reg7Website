import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapabilitiesComponent } from 'src/app/home/components/capabilities/capabilities.component';

@NgModule({
  declarations: [CapabilitiesComponent],
  imports: [CommonModule],
  exports: [CapabilitiesComponent],
})
export class CapabilitiesModule {
  customElementComponent: Type<any> = CapabilitiesComponent;
}
