import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atributo } from './atributo';

describe('Atributo', () => {
  let component: Atributo;
  let fixture: ComponentFixture<Atributo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atributo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atributo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
