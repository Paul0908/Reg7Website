import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubPageImgHeaderComponent} from 'src/app/shared/sub-page-img-header/sub-page-img-header.component';
import {LazyImgLoadingDirective} from './directives/lazy-img-loading.directive';

@NgModule({
  declarations: [SubPageImgHeaderComponent, LazyImgLoadingDirective],
  imports: [
    CommonModule,
  ],
  exports: [SubPageImgHeaderComponent, LazyImgLoadingDirective],
})
export default class SharedModule {
}
