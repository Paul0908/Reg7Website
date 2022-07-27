import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageImgHeaderComponent } from 'src/app/shared/sub-page-img-header/sub-page-img-header.component';

describe('SubPageImgHeaderComponent', () => {
  let component: SubPageImgHeaderComponent;
  let fixture: ComponentFixture<SubPageImgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageImgHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageImgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
