import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() addToWishlist = new EventEmitter<any>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlistClick(): void {
    this.addToWishlist.emit(this.course);
  }
}
