
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtns = page.getByRole('button', { name: 'Add to cart' });
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.addToCartBtns.first().click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}