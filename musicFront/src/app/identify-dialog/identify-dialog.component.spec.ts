import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyDialogComponent } from './identify-dialog.component';

describe('IdentifyDialogComponent', () => {
  let component: IdentifyDialogComponent;
  let fixture: ComponentFixture<IdentifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
