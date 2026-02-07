from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_images(page: Page):
    # Go to a project page
    page.goto("http://localhost:4321/project/linjalla")

    # Wait for the hero image to be visible
    # Astro Assets adds a hash to the class or modifies attributes, but fetchpriority="high" should still be there as we passed it
    # We can also check if the src contains 'linjalla-hero' and some hash
    hero_image = page.locator('img[fetchpriority="high"]')
    expect(hero_image).to_be_visible()

    # Wait for gallery images
    # We look for images inside the gallery grid
    gallery_images = page.locator('.grid.grid-cols-1.md\\:grid-cols-2.gap-8 img')
    # There should be at least 2 gallery images
    expect(gallery_images).to_have_count(2)
    expect(gallery_images.first).to_be_visible()

    # Take a screenshot
    os.makedirs("/home/jules/verification", exist_ok=True)
    page.screenshot(path="/home/jules/verification/project_images.png", full_page=True)
    print("Screenshot saved to /home/jules/verification/project_images.png")

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
