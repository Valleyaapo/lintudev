from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Check Project Page
        print("Navigating to project page...")
        page.goto("http://localhost:4321/project/linjalla")
        page.wait_for_load_state("networkidle")

        # Verify hero image
        print("Checking hero image...")
        hero_img = page.locator("img[alt='Linjalla']")
        if hero_img.count() > 0:
            src = hero_img.get_attribute("src")
            print(f"Hero image src: {src}")
            if "_astro" in src:
                print("✅ Hero image is optimized (contains _astro)")
            else:
                print("❌ Hero image might not be optimized")
        else:
            print("❌ Hero image not found")

        # Verify gallery images
        print("Checking gallery images...")
        gallery_imgs = page.locator("img[alt^='Linjalla gallery image']")
        count = gallery_imgs.count()
        print(f"Found {count} gallery images")

        if count > 0:
            first_gallery_src = gallery_imgs.first.get_attribute("src")
            print(f"First gallery image src: {first_gallery_src}")
            if "_astro" in first_gallery_src:
                print("✅ Gallery images are optimized")
            else:
                print("❌ Gallery images might not be optimized")

        # Take screenshot
        page.screenshot(path="verification.png", full_page=True)
        print("Screenshot saved to verification.png")

        browser.close()

if __name__ == "__main__":
    verify_images()
