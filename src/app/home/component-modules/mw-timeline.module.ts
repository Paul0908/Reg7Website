import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeldewesenTimelineComponent } from 'src/app/home/components/meldewesen-timeline/meldewesen-timeline.component';

@NgModule({
  declarations: [MeldewesenTimelineComponent],
  imports: [CommonModule],
  exports: [MeldewesenTimelineComponent]
})

export class MwTimelineModule {
  customElementComponent: Type<any> = MeldewesenTimelineComponent;
}
