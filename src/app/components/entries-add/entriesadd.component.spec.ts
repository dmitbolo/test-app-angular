import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesaddComponent } from './entriesadd.component';

describe('EntriesaddComponent', () => {
  let component: EntriesaddComponent;
  let fixture: ComponentFixture<EntriesaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntriesaddComponent]
    });
    fixture = TestBed.createComponent(EntriesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
