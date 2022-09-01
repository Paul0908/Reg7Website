import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTextBoxComponent } from './icon-text-box.component';

describe('IconTextBoxComponent', () => {
  let component: IconTextBoxComponent;
  let fixture: ComponentFixture<IconTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
