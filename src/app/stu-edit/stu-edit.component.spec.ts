import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuEditComponent } from './stu-edit.component';

describe('StuEditComponent', () => {
  let component: StuEditComponent;
  let fixture: ComponentFixture<StuEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
