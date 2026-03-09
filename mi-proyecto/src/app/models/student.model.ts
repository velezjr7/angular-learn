import { Course } from './course.model';

export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourseIds: Course['id'][];
  phoneNumber?: string;
  registrationDate?: string;
}
