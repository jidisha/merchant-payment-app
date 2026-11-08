import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFormStep4 } from './merchant-form-step-4';

describe('MerchantFormStep4', () => {
  let component: MerchantFormStep4;
  let fixture: ComponentFixture<MerchantFormStep4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantFormStep4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantFormStep4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
