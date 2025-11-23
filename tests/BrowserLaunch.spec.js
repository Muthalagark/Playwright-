import{test,chromium} from '@playwright/test'


test('Browser Launch',async() => {
 
const browser = await chromium.launch({headless:false})
const window = await browser.newContext()
const tab = await window.newPage()
await tab.goto('https://www.flipkart.com/clo/~cs-6xs9qms0jj/pr?sid=clo&collection-tab-name=Tops+And+Dresses&pageCriteria=default&p%5B%5D=facets.brand%255B%255D%3DTokyo%2BTalkies&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DSASSAFRAS&p%5B%5D=facets.brand%255B%255D%3DHARPA&p%5B%5D=facets.brand%255B%255D%3DPLUSS&p%5B%5D=facets.brand%255B%255D%3DUptownie%2BLite&p%5B%5D=facets.brand%255B%255D%3DATHENA&p%5B%5D=facets.brand%255B%255D%3DMiss%2BChase&p%5B%5D=facets.brand%255B%255D%3DKASSUALLY&p%5B%5D=facets.brand%255B%255D%3DSTREET9&p%5B%5D=facets.brand%255B%255D%3DBerrylush&p%5B%5D=facets.brand%255B%255D%3DJanasya&p%5B%5D=facets.brand%255B%255D%3DMAX&p%5B%5D=facets.brand%255B%255D%3DVERO%2BMODA&p%5B%5D=facets.brand%255B%255D%3DRoadster&p%5B%5D=facets.brand%255B%255D%3DRARE&p%5B%5D=facets.brand%255B%255D%3DKETCH&p%5B%5D=facets.brand%255B%255D%3DONLY&p%5B%5D=facets.brand%255B%255D%3DJUNEBERRY&p%5B%5D=facets.brand%255B%255D%3DYash%2BGallery&p%5B%5D=facets.brand%255B%255D%3DRIGO&p%5B%5D=facets.brand%255B%255D%3DDressberry&p%5B%5D=facets.brand%255B%255D%3DFreehand&p%5B%5D=facets.brand%255B%255D%3DSASSAFRAS%2BCurve&p%5B%5D=facets.brand%255B%255D%3DMADAME&p%5B%5D=facets.brand%255B%255D%3DSTYLESTONE&p%5B%5D=facets.brand%255B%255D%3DBerrylush%2BCurve&p%5B%5D=facets.brand%255B%255D%3DVishudh&p%5B%5D=facets.brand%255B%255D%3DOXOLLOXO&p%5B%5D=facets.brand%255B%255D%3DLeotude&p%5B%5D=facets.brand%255B%255D%3DFabflee&p%5B%5D=facets.brand%255B%255D%3DRaiyani%2BEnterprise&p%5B%5D=facets.brand%255B%255D%3DCalm%2BDown&p%5B%5D=facets.brand%255B%255D%3DRahi%2BTrendz&p%5B%5D=facets.brand%255B%255D%3DPURVAJA&p%5B%5D=facets.brand%255B%255D%3DLeriya%2BFashion&p%5B%5D=facets.brand%255B%255D%3DAahwan&p%5B%5D=facets.brand%255B%255D%3DFUNDAY%2BFASHION&p%5B%5D=facets.brand%255B%255D%3DZWERLON&p%5B%5D=facets.brand%255B%255D%3DTANDUL&p%5B%5D=facets.brand%255B%255D%3DSelvia&p%5B%5D=facets.brand%255B%255D%3DHonky%2BTonky&p%5B%5D=facets.brand%255B%255D%3DFashion2wear&p%5B%5D=facets.brand%255B%255D%3DDream%2BBeauty%2BFashion&p%5B%5D=facets.brand%255B%255D%3DAAYU&p%5B%5D=facets.brand%255B%255D%3DSheetal%2BAssociates&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore')
const Scroll = await tab.getByText("Corporate Information")
await Scroll.scrollIntoViewIfNeeded()
await tab.waitForTimeout(5000)



    // await tab.goto('https://www.flipkart.com/')
// await tab.goBack()
// await tab.goForward()
// await tab.reload()
// const page = await tab.title()
// console.log(page)
// const url = await tab.url()
// console.log(url)
// const window1 = await browser.newContext()
// const tab1 = await window1.newPage()
// const tab2 = await window1.newPage()
// await tab1.goto('https://www.facebook.com/')
// await tab2.goto('https://www.flipkart.com/')
// const window2 = await browser.newContext()
// const tab3 = await window2.newPage()
// const tab4 = await window2.newPage()
// await tab3.goto('https://www.facebook.com/')
// await tab4.goto('https://www.flipkart.com/')
// await tab5.goto('https://www.amazon.com/')
})