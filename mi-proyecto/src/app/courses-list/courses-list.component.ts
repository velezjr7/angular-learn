import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const description = params.get('description');
      this.loadCourseDetails(description);
    });
  }

  loadCourseDetails(description: string | null): void {
    this.courseService.getCourses(description || undefined).subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      },
    });
  }

  onCourseBooked(course: Course): void {
    console.log(`Course booked: ${course.title}`);
  }

  onAddToWishlist(course: Course): void {
    console.log(`Course added to wishlist: ${course.title}`);
    this.wishlist.push(course);
  }
}
