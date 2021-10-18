import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletesComponent } from './palletes.component';

describe('PalletesComponent', () => {
  let component: PalletesComponent;
  let fixture: ComponentFixture<PalletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
