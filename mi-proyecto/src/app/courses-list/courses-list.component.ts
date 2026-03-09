import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle],
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
    },
    {
      id: 2,
      title: 'Advanced to Angular',
      description: 'Take your Angular skills to the next level',
      price: 79,
      date: '2025-03-01',
      soldOut: true,
      img: 'angular-logo.png',
    },
  ];

  ngOnInit(): void {
    console.log('Aquí ando pa desde courses-list');
  }

  viewDetails(title: string): void {
    alert(`Viewing details for ${title}`);
  }
}
