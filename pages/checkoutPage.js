
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.finishBtn = page.getByRole('button', { name: 'Finish' });
  }

  async completeCheckout() {
    await this.checkoutBtn.click();
    await this.firstName.fill('BALAJI');
    await this.lastName.fill('S');
    await this.postalCode.fill('563132');
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}