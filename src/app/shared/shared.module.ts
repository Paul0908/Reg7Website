import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPageImgHeaderComponent } from 'src/app/shared/sub-page-img-header/sub-page-img-header.component';

@NgModule({
  declarations: [SubPageImgHeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [SubPageImgHeaderComponent],
})
export default class SharedModule { }
