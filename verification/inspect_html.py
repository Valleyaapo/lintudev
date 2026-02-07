from playwright.sync_api import Page, expect, sync_playwright

def inspect_html(page: Page):
    page.goto("http://localhost:4321/project/linjalla")
    # Wait for hydration/rendering
    page.wait_for_timeout(1000)
    hero_div = page.locator('img[fetchpriority="high"]').first.locator('..')
    print(hero_div.inner_html())

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            inspect_html(page)
        except Exception as e:
            print(f"Error: {e}")
            exit(1)
        finally:
            browser.close()
