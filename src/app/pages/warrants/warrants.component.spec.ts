import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantsComponent } from './warrants.component';

describe('WarrantsComponent', () => {
  let component: WarrantsComponent;
  let fixture: ComponentFixture<WarrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
