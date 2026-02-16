from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to Linjalla project page...")
        page.goto("http://localhost:4321/project/linjalla")

        print("Waiting for page load...")
        page.wait_for_selector("h1:has-text('Linjalla')")

        # Verify Hero Image
        print("Verifying Hero Image...")
        hero_img = page.locator("img[fetchpriority='high']").first
        hero_src = hero_img.get_attribute("src")
        print(f"Hero Image Src: {hero_src}")

        # Ensure it's loaded by checking naturalWidth
        # Wait a bit just in case
        page.wait_for_timeout(1000)
        is_visible = hero_img.evaluate("img => img.naturalWidth > 0")
        if is_visible:
             print("Hero image is loaded and visible (naturalWidth > 0).")
        else:
             print("ERROR: Hero image failed to load (naturalWidth == 0).")

        # Verify Gallery Images
        print("Verifying Gallery Images...")
        gallery_section = page.locator("h2:has-text('Project Gallery') + div")
        gallery_imgs = gallery_section.locator("img").all()
        print(f"Found {len(gallery_imgs)} gallery images.")

        for i, img in enumerate(gallery_imgs):
            src = img.get_attribute("src")
            print(f"Gallery Image {i+1} Src: {src}")

            # Scroll into view to trigger lazy loading
            img.scroll_into_view_if_needed()
            page.wait_for_timeout(1000) # wait a bit for lazy load

            is_visible = img.evaluate("img => img.naturalWidth > 0")
            if is_visible:
                 print(f"Gallery Image {i+1} is loaded and visible.")
            else:
                 print(f"ERROR: Gallery Image {i+1} failed to load.")

        # Take screenshot
        output_path = "verification_images_v2.png"
        page.screenshot(path=output_path, full_page=True)
        print(f"Screenshot saved to {output_path}")

        browser.close()

if __name__ == "__main__":
    verify_images()
