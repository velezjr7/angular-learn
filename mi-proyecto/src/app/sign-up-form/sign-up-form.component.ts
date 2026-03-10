import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  signUpForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: boolean = false;
  courses: Course[] = [];

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      enrolledCourseId: [null, Validators.required],
    });

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      },
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      return;
    }
    const newStudent: Student = {
      id: 0,
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourseIds: [this.signUpForm.value.enrolledCourseId],
    };

    this.courseService.addStudent(newStudent).subscribe({
      next: (response) => {
        console.log('Student added successfully:', response);
        this.submissionSuccess = true;
        this.submissionError = false;
        this.signUpForm.reset();
      },
      error: (error) => {
        console.error('Error adding student:', error);
        this.submissionSuccess = false;
        this.submissionError = true;
      },
    });
  }
}
