import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerchant } from './view-merchant';

describe('ViewMerchant', () => {
  let component: ViewMerchant;
  let fixture: ComponentFixture<ViewMerchant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMerchant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMerchant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
