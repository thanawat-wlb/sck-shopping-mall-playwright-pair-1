import { test, expect } from '@playwright/test';

test('ลูกค้าเข้าสู่ระบบ หาสินค้าชื่อ balance training bicycle 3 ชิ้น เพิ่มลงตะกร้า กด checkout และดำเนินการสั่งซื้อสำเร็จ', async ({ page }) => {
    
    await test.step('ลูกค้าเข้าสู่ระบบ', async () => {
        await page.goto('/auth/login');
        await page.locator('#login-username-input').fill('user_6');
        await page.locator('#login-password-input').fill('P@ssw0rd');
        await page.locator('#login-btn').click();
    });

    await test.step('ใส่คำค้นหา คำว่า bicycle พบชื่อสินค้า Balance Training Bicycle ราคา ฿4,314.60', async ({ }) => {
        await page.locator('#search-product-input').fill('bicycle');
        await page.keyboard.press('Enter');
        await expect(page.locator('#product-card-name-1')).toHaveText('Balance Training Bicycle');
        await expect(page.locator('#product-card-price-1')).toHaveText('฿4,314.60');
    });

    await test.step('เข้าดู และตรวจสอบข้อมูลรายละเอียดสินค้า', async () => {
        await page.locator('#product-card-name-1').click();
        await expect(page.locator('#product-detail-product-name')).toHaveText('Balance Training Bicycle');
        await expect(page.locator('#product-detail-price-thb')).toHaveText('฿4,314.60');
        await expect(page.locator('#product-detail-point')).toHaveText('43 Points');
    });

    await test.step('เพิ่มสินค้าเข้าไปในตะกร้า 3 ชิ้น และตรวจสอบสินค้าในตะกร้า', async () => {
        await page.locator('#product-detail-quantity-increment-btn').click({ clickCount : 2 });
        await page.locator('#product-detail-add-to-cart-btn').click();
        await expect(page.locator('#header-menu-cart-badge')).toHaveText('1');
        await page.locator('#header-menu-cart-btn').click();
        await expect(page.locator('#product-1-name')).toHaveText('Balance Training Bicycle');
        await expect(page.locator('#product-1-price')).toHaveText('฿12,943.80');
        await expect(page.locator('#product-1-point')).toHaveText('129 Points');
        await expect(page.locator('#shopping-cart-subtotal-price')).toHaveText('฿12,943.79');
    });

    await test.step('เข้าหน้า Checkout และตรวจสอบข้อมูล Order', async () => {

    });
});