const puppeteeer = require('puppeteer')
const expect = require('chai').expect

const config = require('../lib/config')
const click = require('../lib/helpers').click
const typeText = require('../lib/helpers').typeText
const loadUrl = require('../lib/helpers').loadUrl
const waitForText = require('../lib/helpers').waitForText
const pressKey = require('../lib/helpers').pressKey
const shouldExist = require('../lib/helpers').shouldExist
const shouldNotExist = require('../lib/helpers').shouldNotExist
const getCount = require('../lib/helpers').getCount

const utils = require("../lib/utils")

let browser
let page

describe('My first puppeteer test', () => {

    before(async function() {
        browser = await puppeteeer.launch({
            headless: config.isHeadless,
            slowMo: config.slowMo,
            devtools: config.isDevTools,
            timeout: config.launchTimeout,
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(config.waitingTimeout)
        await page.setViewport({
            width: config.viewportWidth,
            height: config.viewportHeight
        })
    })

    after(async function() {
        await browser.close()
    })

    describe('Login Test', () => {
        it('should navigate to menu page', async () => {
            await loadUrl(page, config.baseUrl)
            await shouldExist(page, "#online_banking_features")
        })

        it('should click on signin button', async () => {
            await click(page, '#signin_button')
            await shouldExist(page, '#login_form')
        })

        it('should submit login form', async () => {
            await typeText(page, utils.generateID(), "#user_login")
            await typeText(page, utils.generateID(), "#user_password")
            await click(page, ".btn-primary")
        })

        it('should get error message', async () => {
            await waitForText(page, "body", "Login and/or password are wrong")
            await shouldExist(page, "#login_form")
        })        
    })

    describe('Search Test', () => {
        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl)
            await shouldExist(page, '#online_banking_features')
        })

        it('should submit search phrase', async () => {
            await typeText(page, 'Hello World', "#searchTerm")
            await pressKey(page, 'Enter')
        })

        it('should display search results', async () => {
            await waitForText(page, 'h2', "Search Results")
            await waitForText(page, 'body', "No results were found for the query")
        })
    })

    describe('Navbar Links Test', () => {
        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl)
            await shouldExist(page, '#online_banking_features')
        })
        it('should have corret number of links', async () => {
            const numberOfLinks = await getCount(page, '#pages-nav > li') 
            expect(numberOfLinks).to.equal(3)
        })
    })
})