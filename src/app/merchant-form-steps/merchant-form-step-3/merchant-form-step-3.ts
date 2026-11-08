import { Component, inject, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { CardNumberValidatorDirective } from '../../shared/directives/card-number-validator';

@Component({
  selector: 'app-merchant-form-step-3',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CardNumberValidatorDirective
  ],
  templateUrl: './merchant-form-step-3.html',
  styleUrl: './merchant-form-step-3.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupName
    }
  ]
})
export class MerchantFormStep3 {

  private controlContainer = inject(ControlContainer);

  get bankDetails(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit() {
    console.log(this.bankDetails.value);
  }

}
