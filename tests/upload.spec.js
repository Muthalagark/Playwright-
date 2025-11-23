// Upload
// import{test,chromium} from '@playwright/test'


// test('Browser Launch',async() => {
 
// const browser = await chromium.launch({headless:false})
//     const Windiow = await browser.newContext()
//     const page = await Windiow.newPage()
//     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
//     // await page.locator('#filesToUpload').setInputFiles(["C:/Users/User/Downloads/Sample 3.pdf","C:/Users/User/Downloads/Sample 2 (1).pdf"])
//     // await page.waitForTimeout(5000)
//     // await page.locator('#filesToUpload').setInputFiles([])
//     // await page.waitForTimeout(5000)
//     // await page.pause()
// })

// Download

import { test } from '@playwright/test';

test('Download file example', async ({ page }) => {
  // Go to page
  await page.goto('https://freetestdata.com/document-files/pdf/');

  // Start waiting for the download event
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),               // Wait for download to start
    page.click('text=Download PDF')  // Click download button
  ]);

  // Save the downloaded file to a specific location
  const path = await download.path();
  console.log('Downloaded file path:', path);

  // Optional: Save file to custom directory
  await download.saveAs('downloads/sample.pdf');
  console.log('File saved successfully!');
});
