import { expect, test } from '@playwright/test'

test('현재 시간이 표시되고 실시간으로 갱신된다', async ({ page }) => {
  await page.goto('/')

  const time = page.locator('time')
  await expect(time).toBeVisible()
  await expect(time).toHaveText(/\d{1,2}:\d{2}/)

  const initialTime = await time.getAttribute('datetime')
  await expect.poll(() => time.getAttribute('datetime'), { timeout: 3000 }).not.toBe(initialTime)
})

test('Todo를 추가할 수 있다', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('New todo').fill('Learn Playwright')
  await page.getByRole('button', { name: 'Add' }).click()

  await expect(page.getByRole('listitem')).toContainText('Learn Playwright')
})

test('Todo를 완료할 수 있다', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('New todo').fill('Finish E2E setup')
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByRole('checkbox', { name: 'Mark "Finish E2E setup" as complete' }).check()

  await expect(
    page.getByRole('checkbox', { name: 'Mark "Finish E2E setup" as complete' }),
  ).toBeChecked()
})

test('Todo를 삭제할 수 있다', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('New todo').fill('Remove this Todo')
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByRole('listitem').getByRole('button', { name: 'Delete' }).click()

  await expect(page.getByRole('listitem')).toHaveCount(0)
})
