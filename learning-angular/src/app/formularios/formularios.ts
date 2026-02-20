import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    isChecked: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {
    // this.name.setValue('John');
  }
}
