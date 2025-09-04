# Studio Aeon Style Guide

To succeed on this assessment, your submission should closely match the design and layout of the provided Studio Aeon screenshot. Use this guide to recreate the visual style using your own CSS. The more faithfully you match the appearance and structure, the more likely you'll achieve an "Exemplary" rating.

---

## Color Palette

| Element              | Description    | Hex Code  |
| -------------------- | -------------- | --------- |
| Page background      | Charcoal black | `#0d0d0d` |
| Primary text         | Light gray     | `#e0e0e0` |
| Accent 1             | Neon blue      | `#00f0ff` |
| Accent 2             | Neon pink      | `#ff00f0` |
| Hero card background | Gunmetal gray  | `#2c2c2c` |

---

## Fonts

- **Heading font:** [Orbitron](https://fonts.google.com/specimen/Orbitron) (use for `h1`, `h2`, `h3`)
- **Body font:** [Dosis](https://fonts.google.com/specimen/Dosis) (use for all body text)

Import these fonts via a `@import` rule:

<pre><code>@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');</code></pre>

<pre><code>.orbitron {
  font-family: 'Orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.dosis {
  font-family: 'Dosis', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}</code></pre>

## Layout Guidelines

- The page should be centered with a fixed max width (around `960px`) and `margin: 0 auto`.
- Use **Flexbox** for layout, especially to place `main` and `aside` content side by side.
- Avoid `position: absolute` for layout unless absolutely necessary.

---

## Component & Element Styles

- **Navigation Links**:

  - Horizontally aligned
  - Neon blue (`#00f0ff`) text by default
  - No underline by default

- **Header**:

  - Horizontal layout with site name on the left and links on the right
  - Bottom border in neon blue

- **Hero Images**:

  - Use block-level images with a `2px solid #00f0ff` border
  - Stretch image width to fill container

- **Hero Cards**:

  - Background: `#2c2c2c`
  - Include an image, heading, and descriptive paragraph
  - Padding inside the card and spacing between cards

- **Newsletter Form**:

  - Text input and submit button appear inline
  - The input should grow to fill available space
  - Button styled with neon pink background and white text

- **Text Emphasis**:
  - Use a bright pink text style for `h1` heading ("Zhara Vex is Coming")

---

## Additional Guidelines

- Use `box-sizing: border-box` globally.
- Avoid inline styles unless absolutely necessary.
- Make sure all images have descriptive `alt` text.
- Keep CSS formatting clean and readable.
- When in doubt, match the spacing and alignment shown in the screenshot.

---

## Final Notes

Focus on matching the aesthetic, using proper HTML semantics, and applying consistent styling. Matching this guide and the screenshot layout will help you build a strong, professional-looking submission.
