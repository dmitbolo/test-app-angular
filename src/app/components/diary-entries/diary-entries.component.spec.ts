import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEntriesComponent } from './diary-entries.component';

describe('DiaryEntriesComponent', () => {
  let component: DiaryEntriesComponent;
  let fixture: ComponentFixture<DiaryEntriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryEntriesComponent]
    });
    fixture = TestBed.createComponent(DiaryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
