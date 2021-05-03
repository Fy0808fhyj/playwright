import {chromium, ChromiumBrowser, Page} from "playwright"
(async ()=>{
    const browser: ChromiumBrowser =await chromium.launch({
        headless:false,
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    });
    const page: Page =await browser.newPage();
    await page.goto("https://example.com");
})()