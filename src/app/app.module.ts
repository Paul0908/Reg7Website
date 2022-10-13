/**----------------------------------
 * ANGULAR MODULES
 -----------------------------------*/
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**----------------------------------
 * EXTERNAL MODULES
 -----------------------------------*/
import {NgxLazyElModule} from '@juristr/ngx-lazy-el';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**----------------------------------
 * OWN MODULES/CLASSES
 -----------------------------------*/
import {GlobalErrorHandler} from "src/app/chunkErrors/globalErrorHandler";

/**----------------------------------
 * COMPONENTS
 -----------------------------------*/
import {AppComponent} from 'src/app/app.component';
import {ShowScreenComponent} from 'src/app/home/components/showScreen/show-screen.component';
import {StartPageComponent} from 'src/app/home/start-page/start-page.component';
import {NewShowScreenComponent} from './home/components/new-show-screen/new-show-screen.component';
import {ZoomBoxComponent} from './home/components/zoom-box/zoom-box.component';
import {MeasuresComponent} from './home/components/measures/measures.component';
import {IconTextBoxComponent} from './home/components/icon-text-box/icon-text-box.component';

/**----------------------------------
 * SERVICES
 -----------------------------------*/
// import {DeviceSizeService} from "src/app/shared/services/device-size.service";
// import {ScrollDetectionService} from "src/app/shared/services/scroll-detection.service";
/**----------------------------------
 * DIRECTIVES
 -----------------------------------*/
import AddClassOnHoverDirective from 'src/app/home/directives/add-class-on-hover.directive';
import {AddActiveClassDirective} from 'src/app/app-additions/directives/add-active-class.directive';
import {LandingScreenComponent} from './home/components/landing-screen/landing-screen.component';
import {QuoteComponent} from './home/components/quote/quote.component';


/**
 * Definierung aller Routen für das Router Outlet
 */
const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {
    path: 'projekte',
    loadChildren: () => import('src/app/projects/projects-page/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'team',
    loadChildren: () => import('src/app/team/team-page/team-page.module')
        .then((m) => m.TeamPageModule)
  },
  {
    path: 'leistungen',
    loadChildren: () => import('src/app/services/services-module/services.module')
        .then((m) => m.ServicesModule)
  }

];

/**
 * Definierung aller Module die für lazy loading genutzt werden sollen
 */
const lazyConfig = [
  {
    selector: 'lazy-capabilities',
    loadChildren: () => import('src/app/home/component-modules/capabilities.module').then((m) => m.CapabilitiesModule),
  },
  {
    selector: 'lazy-mw-timeline',
    loadChildren: () => import('src/app/home/component-modules/mw-timeline.module').then((m) => m.MwTimelineModule),
  },
];
// TODO: app shell und angular universal für schnellere ladezeiten:
// https://blog.angular-university.io/angular-app-shell/

// TODO: SEO
// https://www.youtube.com/watch?v=ANyOZIcGvB8

// TODO: remove all unused components
@NgModule({
  declarations: [
    AppComponent,
    ShowScreenComponent,
    StartPageComponent,
    AddClassOnHoverDirective,
    AddActiveClassDirective,
    NewShowScreenComponent,
    ZoomBoxComponent,
    MeasuresComponent,
    IconTextBoxComponent,
    LandingScreenComponent,
    QuoteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    NgxLazyElModule.forRoot(lazyConfig),
    FormsModule,
  ],
  exports: [
    RouterModule,
    MeasuresComponent,
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}

// ScrollDetectionService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (sds: ScrollDetectionService) => () => sds.initService(),
    //   deps: [ScrollDetectionService],
    //   multi: true
    // },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
