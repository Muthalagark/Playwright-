
import { test, expect } from '@playwright/test';

test('hover and click mobiles', async ({ page }) => {

  await page.goto("https://demo.automationtesting.in/Frames.html");
  await page.getByRole("link", { name: "Iframe with in an Iframe" }).click();

  // Switch to the first iframe
  // const frame = page.frameLocator("iframe[id='singleframe']");

  // // Fill the input inside the frame
  // await frame.locator("input[type='text']").fill("Muthu");

  // await page.waitForTimeout(3000);
  //Nested Frame
  const outerFrame = page.frameLocator("iframe[src='MultipleFrames.html']");
  const innerFrame = outerFrame.frameLocator("iframe[src='SingleFrame.html']");
  await innerFrame.locator("input[type='text']").fill("Muthu");



});
