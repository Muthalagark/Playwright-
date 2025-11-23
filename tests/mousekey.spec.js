const{test} = require('@playwright/test')
test('mousekey',async({page})=>{

    await page.goto('https://vinothqaacademy.com/mouse-event/')
    const drag =await page.getByText('Drag Me')
    const drop =await page.getByText('Drop Here')
    await drag.dragTo(drop)



})





