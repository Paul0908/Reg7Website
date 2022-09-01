import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldewesenTimelineComponent } from 'src/app/home/components/meldewesen-timeline/meldewesen-timeline.component';

describe('MeldewesenTimelineComponent', () => {
  let component: MeldewesenTimelineComponent;
  let fixture: ComponentFixture<MeldewesenTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeldewesenTimelineComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeldewesenTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
