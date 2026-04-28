import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CheckoutPage } from '../pages/checkoutPage';

test('Login → Cart → Checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await page.waitForTimeout(2000);
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(2000);

  // Add to cart
  await inventoryPage.addFirstItemToCart();
  await page.waitForTimeout(2000);
  await inventoryPage.goToCart();
  await page.waitForTimeout(2000);

  // Checkout
  await checkoutPage.completeCheckout();
  await page.waitForTimeout(2000);

  // Assertion
  await page.waitForTimeout(2000);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});