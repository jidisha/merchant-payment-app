import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFormStep3 } from './merchant-form-step-3';

describe('MerchantFormStep3', () => {
  let component: MerchantFormStep3;
  let fixture: ComponentFixture<MerchantFormStep3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantFormStep3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantFormStep3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
