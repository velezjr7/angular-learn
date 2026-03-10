import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses-list/courses-list.component').then(
        (m) => m.CoursesListComponent,
      ),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up-form/sign-up-form.component').then(
        (m) => m.SignUpFormComponent,
      ),
  },
  {
    path: 'add-course',
    loadComponent: () =>
      import('./add-new-course/add-new-course.component').then(
        (m) => m.AddNewCourseComponent,
      ),
  },
];
