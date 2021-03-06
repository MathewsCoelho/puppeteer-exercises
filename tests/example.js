// const puppeteeer = require('puppeteer')
// const expect = require('chai').expect

// const config = require('../lib/config')
// const click = require('../lib/helpers').click
// const typeText = require('../lib/helpers').typeText
// const loadUrl = require('../lib/helpers').loadUrl
// const waitForText = require('../lib/helpers').waitForText
// const pressKey = require('../lib/helpers').pressKey
// const shouldExist = require('../lib/helpers').shouldExist
// const shouldNotExist = require('../lib/helpers').shouldNotExist

// // const generateID = require('../lib/utils').generateID
// // const generateEmail = require('../lib/utils').generateEmail
// // const generatePhone = require('../lib/utils').generatePhone
// const utils = require("../lib/utils")

// describe('My first puppeteer test', () => {
//     let browser
//     let page

//     before(async function() {
//         browser = await puppeteeer.launch({
//             headless: config.isHeadless,
//             slowMo: config.slowMo,
//             devtools: config.isDevTools,
//             timeout: config.launchTimeout,
//         })
//         page = await browser.newPage()
//         await page.setDefaultTimeout(config.waitingTimeout)
//         await page.setViewport({
//             width: config.viewportWidth,
//             height: config.viewportHeight
//         })
//     })

//     after(async function() {
//         await browser.close()
//     })

//     it('My first test step', async() =>{
//         loadUrl(page, config.baseUrl)
//         await shouldExist(page, "#nav-search")
//         const url = await page.url()
//         const title = await page.title()

//         expect(url).to.contain("dev")
//         expect(title).to.contains("Community")
//     })

//     it('browser reload', async () => {
//         await page.reload()
//         await shouldExist(page, "#page-content")
//         await waitForText(page, 'body', 'WRITE A POST')

//         const url = await page.url()
//         const title = await page.title()

//         //await page.waitFor(3000) bad practice
        
//         expect(url).to.contain("dev")
//         expect(title).to.contains("Community")
//     })

//     it('click method', async () => {
//         await loadUrl(page, config.baseUrl)
//         await click(page, "#write-link")
//         await shouldExist(page, '.registration-rainbow')
//     })

//     it('submit searchbox', async () => {
//         await loadUrl(page, config.baseUrl)
//         await typeText(page, utils.generatePhone(), '#nav-search')
//         await page.waitFor(3000)
//         await pressKey(page, "Enter")
//         await shouldExist(page, '#articles-list')
//     })

// })
