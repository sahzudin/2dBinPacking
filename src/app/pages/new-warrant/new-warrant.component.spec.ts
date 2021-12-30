import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWarrantComponent } from './new-warrant.component';

describe('NewWarrantComponent', () => {
  let component: NewWarrantComponent;
  let fixture: ComponentFixture<NewWarrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWarrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWarrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
