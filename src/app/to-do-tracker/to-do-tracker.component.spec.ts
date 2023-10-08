import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTrackerComponent } from './to-do-tracker.component';

describe('ToDoTrackerComponent', () => {
  let component: ToDoTrackerComponent;
  let fixture: ComponentFixture<ToDoTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
