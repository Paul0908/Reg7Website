import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCircleComponent } from 'src/app/components/puzzle-circle/puzzle-circle.component';

describe('PuzzleCircleComponent', () => {
  let component: PuzzleCircleComponent;
  let fixture: ComponentFixture<PuzzleCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
