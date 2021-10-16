import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackerInfoComponent } from './packer-info.component';

describe('PackerInfoComponent', () => {
  let component: PackerInfoComponent;
  let fixture: ComponentFixture<PackerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
