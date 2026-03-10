import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() addToWishlist = new EventEmitter<Course>();

  constructor(private router: Router) {}

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlistClick(): void {
    this.addToWishlist.emit(this.course);
  }

  goToDetails(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}
