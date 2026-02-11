## 2026-02-11 - [Form Accessibility Pattern]
**Learning:** Found critical accessibility issue in Contact form where labels lacked programmatic association with inputs. This breaks screen reader support and click-to-focus behavior.
**Action:** Implemented `useId` hook for generating unique, hydration-safe IDs to link labels and inputs via `htmlFor`. This pattern should be standard for all future forms.
