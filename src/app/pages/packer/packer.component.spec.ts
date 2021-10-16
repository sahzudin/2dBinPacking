import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackerComponent } from './packer.component';

describe('PackerComponent', () => {
  let component: PackerComponent;
  let fixture: ComponentFixture<PackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
