import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
//import { NgxLazyElModule } from '@juristr/ngx-lazy-el';
import SharedModule from 'src/app/shared/shared.module';
import {TeamPageComponent} from "src/app/team/team-page/team-page.component";
import {MemberCardComponent} from '../components/member-card/member-card.component';


const teamPageRoutes: Routes = [
    {path: '', component: TeamPageComponent},
];

//const lazyConfig = [{}];

@NgModule({
    declarations: [TeamPageComponent, MemberCardComponent],
    imports: [
        RouterModule.forChild(teamPageRoutes),
        CommonModule,
        //NgxLazyElModule.forRoot(lazyConfig),
        SharedModule,
        SharedModule,
    ],
    exports: [
        RouterModule,
    ],
})
export class TeamPageModule { }
