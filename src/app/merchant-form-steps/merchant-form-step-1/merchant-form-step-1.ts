import { Component, inject } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-merchant-form-step-1',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './merchant-form-step-1.html',
  styleUrl: './merchant-form-step-1.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupName
    }
  ]
})
export class MerchantFormStep1 {
  private controlContainer = inject(ControlContainer);
  get companyDetails(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit() {
  }

}
