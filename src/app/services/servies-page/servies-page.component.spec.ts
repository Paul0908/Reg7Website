import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiesPageComponent} from './servies-page.component';

describe('ServiesPageComponent', () => {
  let component: ServiesPageComponent;
  let fixture: ComponentFixture<ServiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiesPageComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(ServiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
