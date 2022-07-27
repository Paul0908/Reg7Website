/**----------------------------------
 * ANGULAR MODULES
 -----------------------------------*/
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
/**----------------------------------
 * EXTERNAL MODULES
 -----------------------------------*/
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**----------------------------------
 * OWN MODULES
 -----------------------------------*/
import {ProjectsModule} from "src/app/projects/projects-page/projects.module";

/**----------------------------------
 * COMPONENTS
 -----------------------------------*/
import { AppComponent } from 'src/app/main-app/app.component';
import { ShowScreenComponent } from 'src/app/home/components/showScreen/show-screen.component';
import { PuzzleCircleComponent } from 'src/app/home/components/puzzle-circle/puzzle-circle.component';
import { StartPageComponent } from 'src/app/home/start-page/start-page.component';
import { RoadmapComponent } from 'src/app/home/components/roadmap/roadmap.component';


/**----------------------------------
 * SERVICES
 -----------------------------------*/
// import {DeviceSizeService} from "src/app/shared/services/device-size.service";
// import {ScrollDetectionService} from "src/app/shared/services/scroll-detection.service";


/**----------------------------------
 * DIRECTIVES
 -----------------------------------*/
import { AddClassOnHoverDirective } from 'src/app/home/directives/add-class-on-hover.directive';
import { AddActiveClassDirective } from 'src/app/main-app/directives/add-active-class.directive';


/**
 * Definierung aller Routen für das Router Outlet
 */
const appRoutes: Routes = [
  { path: '', component:  StartPageComponent},
  { path: 'projekte',
    loadChildren: () => import('src/app/projects/projects-page/projects.module').then(m => m.ProjectsModule)      }
];

/**
 * Definierung aller Module die für lazy loading genutzt werden sollen
 */
const lazyConfig = [
  {
    selector: 'lazy-capabilities',
    loadChildren: () =>
        import('src/app/home/component-modules/capabilities.module').then(m => m.CapabilitiesModule)
  },
  {
    selector: 'lazy-mw-timeline',
    loadChildren: () =>
        import('src/app/home/component-modules/mw-timeline.module').then(m => m.MwTimelineModule)
  },
];
//TODO: app shell und angular universal für schnellere ladezeiten:
//https://blog.angular-university.io/angular-app-shell/

//TODO: remove all unused components
@NgModule({
  declarations: [
    AppComponent,
    ShowScreenComponent,
    PuzzleCircleComponent,
    StartPageComponent,
    AddClassOnHoverDirective,
    RoadmapComponent,
    AddActiveClassDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    NgxLazyElModule.forRoot(lazyConfig),
    FormsModule,
  ],
  exports: [
      RouterModule
  ],
  providers: [
    // ScrollDetectionService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (sds: ScrollDetectionService) => () => sds.initService(),
    //   deps: [ScrollDetectionService],
    //   multi: true
    // },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
