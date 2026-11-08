import { Component, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-merchant-form-step-4',
  imports: [],
  templateUrl: './merchant-form-step-4.html',
  styleUrl: './merchant-form-step-4.scss',
})
export class MerchantFormStep4 {

  private controlContainer = inject(ControlContainer);

  get registrationForm(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

}
