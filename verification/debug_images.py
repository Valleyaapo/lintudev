from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_images(page: Page):
    # Go to a project page
    page.goto("http://localhost:4321/project/linjalla")

    # Wait for the hero image to be visible
    hero_image = page.locator('img[fetchpriority="high"]')

    # Print src
    print(f"Hero Image Src: {hero_image.get_attribute('src')}")

    # Wait for gallery images
    gallery_images = page.locator('.grid.grid-cols-1.md\\:grid-cols-2.gap-8 img')

    print(f"Gallery Image 1 Src: {gallery_images.first.get_attribute('src')}")
    print(f"Gallery Image 2 Src: {gallery_images.nth(1).get_attribute('src')}")

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
