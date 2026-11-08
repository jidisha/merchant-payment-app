import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFormStep1 } from './merchant-form-step-1';

describe('MerchantFormStep1', () => {
  let component: MerchantFormStep1;
  let fixture: ComponentFixture<MerchantFormStep1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantFormStep1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantFormStep1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
