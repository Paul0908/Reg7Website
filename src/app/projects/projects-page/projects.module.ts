import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/projects/projects-page/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';
import SharedModule from 'src/app/shared/shared.module';
import { ProjectCardComponent } from 'src/app/projects/components/project-card/project-card.component';

const projectRoutes: Routes = [
  { path: '', component: ProjectsComponent },
];

const lazyConfig = [{}];

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
    NgxLazyElModule.forRoot(lazyConfig),
    SharedModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectsModule { }
