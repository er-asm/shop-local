import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalinksComponent } from './metalinks.component';

describe('MetalinksComponent', () => {
  let component: MetalinksComponent;
  let fixture: ComponentFixture<MetalinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetalinksComponent]
    });
    fixture = TestBed.createComponent(MetalinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
