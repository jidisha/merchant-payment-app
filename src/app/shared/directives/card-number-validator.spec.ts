import { CardNumberValidator } from './card-number-validator';

describe('CardNumberValidator', () => {
  it('should create an instance', () => {
    const directive = new CardNumberValidator();
    expect(directive).toBeTruthy();
  });
});
