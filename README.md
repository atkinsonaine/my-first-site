# Milestone 2: Accessible, intentional design

## Accessibility

- The home, About, and Projects pages each provide a clear page title, one level-one heading, semantic landmarks, and a skip link.
- Descriptive alternative text identifies the meaningful photos on the home and About pages.
- The Projects section now has a heading, and each project card has a descriptive accessible link name.
- The About page provides a descriptive, keyboard-accessible email link for direct contact.

here are my  WAVE results

WAVE reports are available for these 3 deployed pages:

- Home: [WAVE report](https://wave.webaim.org/report?url=https%3A%2F%2Fatkinsonaine.github.io%2Fmy-first-site%2F)
- About and contact: [WAVE report](https://wave.webaim.org/report?url=https%3A%2F%2Fatkinsonaine.github.io%2Fmy-first-site%2Fabout.html)
- Projects: [WAVE report](https://wave.webaim.org/report?url=https%3A%2F%2Fatkinsonaine.github.io%2Fmy-first-site%2Fprojects%2Fprojects.html)

The available report text says “No errors were detected” as I changed the contrast of the colors of background and text but also incorrectly says each page has no header structure 

### WCAG AA contrast

The shared palette uses dark purple and charcoal text against pale lavender, pastel pink, pale blue, and cream surfaces; the white navigation and About heading use the dark-purple background.

| Text color | Background color | Contrast ratio | WCAG AA |
|---|---|---:|---|
| `#2D2033` | `#F8F2FA` | 13.96:1 | Pass |
| `#2D2033` | `#FCE5EF` | 12.88:1 | Pass |
| `#2D2033` | `#E3F2FD` | 13.46:1 | Pass |
| `#2D2033` | `#FFFFFF` | 15.37:1 | Pass |
| `#370446` | `#FFF8DC` | 15.54:1 | Pass |
| `#370446` | `#E3F2FD` | 14.50:1 | Pass |
| `#370446` | `#FCE5EF` | 13.87:1 | Pass |
| `#370446` | `#F0E2F5` | 13.33:1 | Pass |
| `#FFFFFF` | `#370446` | 16.56:1 | Pass |
| `#78378C` | `#F8F2FA` | 7.00:1 | Pass |
| `#FFFFFF` | `#78378C` | 7.71:1 | Pass |
| `#86142B` | `#E3F2FD` | 8.56:1 | Pass |

Ratios were checked against the WCAG relative-luminance formula and spot-checked with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Visual design

- **Proximity:** Each project card groups its assignment title with its description, and consistent spacing separates the cards from one another.
- **Similarity:** Repeated card shapes, border treatments, Lora headings, Nunito Sans body text, and the shared purple-and-pastel palette visually connect the three pages.
