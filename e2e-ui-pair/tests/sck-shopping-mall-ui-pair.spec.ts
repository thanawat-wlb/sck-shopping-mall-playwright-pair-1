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
});