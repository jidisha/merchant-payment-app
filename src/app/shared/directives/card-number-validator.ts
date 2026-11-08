import {
  Directive,
  forwardRef,
  input
} from '@angular/core';

import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appCardNumberValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CardNumberValidatorDirective),
      multi: true
    }
  ]
})
export class CardNumberValidatorDirective implements Validator {

  appCardNumberValidator = input<boolean>(true);

  validate(control: AbstractControl): ValidationErrors | null {

    if (!this.appCardNumberValidator()) {
      return null;
    }

    const value = control.value;

    if (!value) {
      return null;
    }

    // Remove spaces and hyphens
    const cardNumber = String(value).replace(/[\s-]/g, '');

    // Only allow digits
    if (!/^\d+$/.test(cardNumber)) {
      return { invalidCardNumber: true };
    }

    // Card numbers typically contain 12–19 digits
    if (cardNumber.length < 12 || cardNumber.length > 19) {
      return { invalidCardNumber: true };
    }

    return this.luhnCheck(cardNumber)
      ? null
      : { invalidCardNumber: true };
  }

  private luhnCheck(cardNumber: string): boolean {

    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {

      let digit = Number(cardNumber[i]);

      if (shouldDouble) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }
}