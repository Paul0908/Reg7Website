import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShowScreenComponent } from './new-show-screen.component';

describe('NewShowScreenComponent', () => {
  let component: NewShowScreenComponent;
  let fixture: ComponentFixture<NewShowScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewShowScreenComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
