import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Intro to Angular',
      description: 'Learn the basics of Angular framework',
      price: 49,
      date: '2025-03-01',
      soldOut: false,
      img: 'angular-logo.png',
      onSale: false,
    },
    {
      id: 2,
      title: 'Advanced to Angular',
      description: 'Take your Angular skills to the next level',
      price: 79,
      date: '2025-03-01',
      soldOut: true,
      img: 'angular-logo.png',
      onSale: true,
    },
    {
      id: 3,
      title: 'RxJS Fundamentals',
      description: 'Learn the fundamentals of RxJS for reactive programming',
      price: 45,
      date: '2025-03-01',
      soldOut: false,
      img: 'rxjs-logo.png',
      onSale: true,
    },
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }
}
