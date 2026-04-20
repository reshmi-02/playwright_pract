import { test, expect } from "@playwright/test";

test("Navigation Commands Example", async ({ page }) => {

  // 1) goto()
  await page.goto("https://the-internet.herokuapp.com/");
  console.log("Home Page URL:", page.url());

  // 8) waitForLoadState()
  await page.waitForLoadState("load");

  // 6) url()
  console.log("Current URL:", page.url());

  // Click Form Authentication link (Navigate to another page)
  await page.locator("a[href='/login']").click();

//   // 7) waitForNavigation()
//   await page.waitForNavigation();

  // 5) waitForURL()
  await page.waitForURL("**/login");

  console.log("After Click URL:", page.url());

  // 4) reload()
  await page.reload();
  console.log("After Reload URL:", page.url());

  // 2) goBack()
  await page.goBack();
  console.log("After goBack URL:", page.url());

  // 3) goForward()
  await page.goForward();
  console.log("After goForward URL:", page.url());

  // close browser tab
  // 9) close()
  await page.close();
});