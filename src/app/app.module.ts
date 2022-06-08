import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowScreenComponent } from './components/showScreen/show-screen.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { Part1Component } from './deprecated/part1/part1.component';
import { Part2Component } from './deprecated/part2/part2.component';
import {PuzzleCircleComponent} from './components/puzzle-circle/puzzle-circle.component';
import { WavesComponent } from './deprecated/waves/waves.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { SvgPathDirective } from './directives/svg-path.directive';

const appRoutes: Routes = [
  { path: '', component:  StartPageComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ShowScreenComponent,
    Part1Component,
    Part2Component,
    PuzzleCircleComponent,
    WavesComponent,
    CapabilitiesComponent,
    StartPageComponent,
    SvgPathDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
