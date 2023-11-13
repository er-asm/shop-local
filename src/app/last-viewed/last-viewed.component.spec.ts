import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedComponent } from './last-viewed.component';

describe('LastViewedComponent', () => {
  let component: LastViewedComponent;
  let fixture: ComponentFixture<LastViewedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastViewedComponent]
    });
    fixture = TestBed.createComponent(LastViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
