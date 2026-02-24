import { test, expect } from '@playwright/test';

test('ลูกค้าเข้าสู่ระบบ หาสินค้าชื่อ balance training bicycle 3 ชิ้น เพิ่มลงตะกร้า กด checkout และดำเนินการสั่งซื้อสำเร็จ', async ({ page }) => {
    
    await test.step('ลูกค้าเข้าสู่ระบบ', async () => {
    // 'user_6', 'P@ssw0rd'
    await page.goto('http://139.59.225.96/auth/login');
    await page.loocator('#login-username-input').fill('user_6');
    await page.locator('#login-password-input').fill('P@ssw0rd');
    await page.locator('#login-btn').click();
    });
});