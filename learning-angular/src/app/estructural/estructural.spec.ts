import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estructural } from './estructural';

describe('Estructural', () => {
  let component: Estructural;
  let fixture: ComponentFixture<Estructural>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estructural]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estructural);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
