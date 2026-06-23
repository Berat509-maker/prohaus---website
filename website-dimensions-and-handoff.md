# Website Dimensions and Handoff

## Main Design Sizes

- Desktop / PC mockup: `1440 x 1200 px`
- Laptop safe width: `1280 px`
- Tablet breakpoint: `980 px`
- Mobile mockup: `390 x 844 px`
- Small phone safe width: `360 px`

## Responsive Rules

- Desktop: two-column hero, text on the left and window image on the right.
- Tablet and mobile: single-column layout, headline first, buttons second, image after.
- Mobile: WhatsApp button stays fixed at the bottom-right so it is always easy to tap.
- Main content max behavior: sections use full-width bands with internal spacing of `64 px` on PC and `16 px` on mobile.

## Build Notes

- Keep the first screen like a Facebook ad: image, offer, phone number, WhatsApp.
- Do not add too much text. The user journey is: see result, request price, send dimensions.
- Replace the demo phone number and WhatsApp links with the real company number.
- Also update `businessWhatsappNumber` in `script.js`; the contact form sends name, phone, dimensions, and message directly to WhatsApp.
- Replace generated demo project photos with real completed-project photos when available.
