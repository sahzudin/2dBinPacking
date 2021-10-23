import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterDialogComponent } from './importer-dialog.component';

describe('ImporterDialogComponent', () => {
  let component: ImporterDialogComponent;
  let fixture: ComponentFixture<ImporterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
