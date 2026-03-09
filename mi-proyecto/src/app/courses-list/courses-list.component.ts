import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent implements OnInit {
  title: string = 'Available courses';
  wishlist: Course[] = [];

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log('Aquí ando pa desde courses-list');
  }

  onCourseBooked(course: Course): void {
    console.log(`Course booked: ${course.title}`);
  }

  onAddToWishlist(course: Course): void {
    console.log(`Course added to wishlist: ${course.title}`);
    this.wishlist.push(course);
  }
}
