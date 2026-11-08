import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFormStep2 } from './merchant-form-step-2';

describe('MerchantFormStep2', () => {
  let component: MerchantFormStep2;
  let fixture: ComponentFixture<MerchantFormStep2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantFormStep2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantFormStep2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
