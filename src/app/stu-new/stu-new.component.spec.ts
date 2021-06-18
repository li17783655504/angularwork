import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuNewComponent } from './stu-new.component';

describe('StuNewComponent', () => {
  let component: StuNewComponent;
  let fixture: ComponentFixture<StuNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
