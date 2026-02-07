from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_images(page: Page):
    # Monitor image requests
    page.on("console", lambda msg: print(f"Console: {msg.text}"))

    # Go to a project page
    page.goto("http://localhost:4321/project/linjalla")

    # Wait for the hero image to be visible
    hero_image = page.locator('img[fetchpriority="high"]')
    expect(hero_image).to_be_visible()

    # Wait for the image to be loaded
    page.wait_for_function("document.querySelector('img[fetchpriority=\"high\"]').complete")

    # Wait a bit more for rendering
    page.wait_for_timeout(2000)

    # Take a screenshot
    os.makedirs("/home/jules/verification", exist_ok=True)
    page.screenshot(path="/home/jules/verification/project_images_retry.png", full_page=True)
    print("Screenshot saved.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_images(page)
        except Exception as e:
            print(f"Error: {e}")
            exit(1)
        finally:
            browser.close()
