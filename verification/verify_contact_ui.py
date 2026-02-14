import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import os
import signal

async def run():
    print("Starting visual verification...")
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Start the dev server
        print("Starting dev server...")
        server = subprocess.Popen(
            ["pnpm", "dev"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            preexec_fn=os.setsid
        )

        try:
            # Wait for server
            print("Waiting for server...")
            time.sleep(10)

            print("Navigating to contact form...")
            try:
                await page.goto("http://localhost:4321/#contact")
            except Exception as e:
                print(f"Failed to navigate: {e}")
                raise e

            # Wait for contact form
            await page.wait_for_selector("#contact")
            print("Contact form found.")

            # Wait for form to settle
            await asyncio.sleep(1)

            # Screenshot 1: Empty Form
            await page.screenshot(path="verification/1_contact_form_empty.png")
            print("Screenshot 1 taken.")

            # Fill form
            print("Filling form...")
            await page.fill('input[name="name"]', "Bolt Test")
            await page.fill('input[name="email"]', "bolt@example.com")
            await page.fill('textarea[name="message"]', "This is a visual verification test.")

            # Screenshot 2: Filled Form
            await page.screenshot(path="verification/2_contact_form_filled.png")
            print("Screenshot 2 taken.")

            # Submit
            submit_btn = await page.wait_for_selector("#btn-submit")

            print("Submitting form...")
            async with page.expect_response("**/api/contact") as response_info:
                await submit_btn.click()

            response = await response_info.value
            if response.status == 200:
                print("Submission successful.")

                # Wait for success message
                await page.wait_for_selector("#contact-success")
                await asyncio.sleep(0.5)

                # Screenshot 3: Success Message
                await page.screenshot(path="verification/3_contact_success.png")
                print("Screenshot 3 taken.")
            else:
                print(f"Submission failed: {response.status}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            print("Stopping server...")
            os.killpg(os.getpgid(server.pid), signal.SIGTERM)
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
