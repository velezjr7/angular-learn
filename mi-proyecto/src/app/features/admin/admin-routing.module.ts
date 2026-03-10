import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'add-course',
        loadComponent: () =>
          import('./add-new-course/add-new-course.component').then(
            (m) => m.AddNewCourseComponent,
          ),
      },
      {
        path: 'students',
        loadComponent: () =>
          import('./student-list/student-list.component').then(
            (m) => m.StudentListComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
