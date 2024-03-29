import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CapabilitiesComponent} from 'src/app/home/components/capabilities/capabilities.component';

describe('CapabilitiesComponent', () => {
  let component: CapabilitiesComponent;
  let fixture: ComponentFixture<CapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapabilitiesComponent],
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
