import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScreenComponent } from 'src/app/home/components/showScreen/show-screen.component';

describe('StartPageComponent', () => {
  let component: ShowScreenComponent;
  let fixture: ComponentFixture<ShowScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
