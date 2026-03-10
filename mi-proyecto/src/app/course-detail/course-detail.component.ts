import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        this.loadCourseById(id);
      } else {
        console.error('No course ID provided in route');
      }
    });
  }

  loadCourseById(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (error) => {
        console.error('Error fetching course details:', error);
      },
    });
  }
}
