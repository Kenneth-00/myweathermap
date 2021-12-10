import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardmapComponent } from './hazardmap.component';

describe('HazardmapComponent', () => {
  let component: HazardmapComponent;
  let fixture: ComponentFixture<HazardmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazardmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
