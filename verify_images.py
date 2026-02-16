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

        if ".webp" in hero_src or "_astro" in hero_src:
            print("Hero image is optimized (contains .webp or _astro path).")
        else:
            print("WARNING: Hero image might not be optimized.")

        # Verify Gallery Images
        print("Verifying Gallery Images...")
        # The gallery has a specific grid structure
        gallery_section = page.locator("h2:has-text('Project Gallery') + div")
        gallery_imgs = gallery_section.locator("img").all()
        print(f"Found {len(gallery_imgs)} gallery images.")

        for i, img in enumerate(gallery_imgs):
            src = img.get_attribute("src")
            print(f"Gallery Image {i+1} Src: {src}")
            if ".webp" in src or "_astro" in src:
                 print(f"Gallery Image {i+1} is optimized.")
            else:
                 print(f"WARNING: Gallery Image {i+1} might not be optimized.")

        # Take screenshot
        output_path = "verification_images.png"
        page.screenshot(path=output_path, full_page=True)
        print(f"Screenshot saved to {output_path}")

        browser.close()

if __name__ == "__main__":
    verify_images()
