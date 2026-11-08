import { Component, inject, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-merchant-form-step-2',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './merchant-form-step-2.html',
  styleUrl: './merchant-form-step-2.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupName
    }
  ]
})
export class MerchantFormStep2 {
  private controlContainer = inject(ControlContainer);
  get companyDetails(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
}
