import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terbaru } from './terbaru';

describe('Terbaru', () => {
  let component: Terbaru;
  let fixture: ComponentFixture<Terbaru>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terbaru],
    }).compileComponents();

    fixture = TestBed.createComponent(Terbaru);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
