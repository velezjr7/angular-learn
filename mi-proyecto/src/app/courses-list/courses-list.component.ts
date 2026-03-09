import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent implements OnInit {
  title: string = 'Available courses';

  courses = [
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

  ngOnInit(): void {
    console.log('Aquí ando pa desde courses-list');
  }

  onCourseBooked(course: any): void {
    console.log(`Course booked: ${course.title}`);
  }
}
