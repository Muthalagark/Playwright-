const{test,expect}=require('@playwright/test')

test('webtable',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = await page.locator('#productTable')
    const column = await table.locator('thead tr th')
    console.log('Number of column:' +await column.count())
    const row = await table.locator('tbody tr')
    console.log('Number of Row:'+await row.count())
    // const checkbox=rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartphone'
    // })
    // await checkbox.locator('input').check()
    // await page.pause()


    //extract all values from webtable

    // for(let i=0;i< await row.count();i++){
    //     const rows = row.nth(i);
    //     const tds = rows.locator('td')
    //     for(let j=0;j<await tds.count()-1;j++){

    //         console.log(await tds.nth(j).textContent())

    //     }
    // }

    //extract values from all pages in webtable if pagination have

    const pages = await page.locator(".pagination li a");
    console.log('Number of Pages:',await pages.count());

    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0;i< await row.count();i++){
        const rows = row.nth(i);
        const tds = rows.locator('td')
        for(let j=0;j<await tds.count()-1;j++){

            console.log(await tds.nth(j).textContent())

        }
    }
    }

})