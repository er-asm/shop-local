import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTopProductsComponent } from './today-top-products.component';

describe('TodayTopProductsComponent', () => {
  let component: TodayTopProductsComponent;
  let fixture: ComponentFixture<TodayTopProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayTopProductsComponent]
    });
    fixture = TestBed.createComponent(TodayTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
