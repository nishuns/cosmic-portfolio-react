# SCSS Configuration Guide

This project uses a structured SCSS architecture based on the 7-1 pattern for scalable CSS organization.

## Folder Structure

```
scss/
├── abstracts/          # Variables, functions, mixins
│   ├── _variables.scss # CSS custom properties & SCSS variables
│   ├── _functions.scss # SCSS functions
│   ├── _mixins.scss    # Reusable mixins
│   └── _index.scss     # Forward all abstracts
├── components/         # Component-specific styles
│   ├── _button.scss    # Button component styles
│   └── _card.scss      # Card component styles
├── layout/             # Layout components (header, footer, etc.)
├── pages/              # Page-specific styles
├── partials/           # Base styles and utilities
│   └── _base.scss      # Reset, normalize, base element styles
└── app.scss           # Main entry point
```

## Key Features

### 🎨 **CSS Custom Properties**

- Modern CSS variables for theming
- Dark mode support built-in
- Semantic color naming system

### 📱 **Responsive Design**

- Mobile-first breakpoint system
- Responsive mixins (`respond-above`, `respond-below`, `respond-between`)
- Flexible grid and flexbox utilities

### 🧩 **Component Architecture**

- BEM-style component classes
- Modular and reusable styles
- Scoped component variants

### ⚡ **Performance Optimized**

- Efficient SCSS compilation
- Tree-shakable imports using `@use`
- Minimal CSS output

## Usage

### Global Access

All abstracts (variables, mixins, functions) are globally available in Vue components thanks to the Nuxt configuration:

```vue
<style lang="scss" scoped>
.my-component {
  padding: spacing("4"); // Function from abstracts
  @include respond-above("md") {
    // Mixin from abstracts
    padding: spacing("6");
  }
}
</style>
```

### Adding New Components

1. Create a new file in `components/` (e.g., `_modal.scss`)
2. Add the import to `app.scss`:
   ```scss
   @use "components/modal";
   ```

### Using Variables

```scss
// CSS Custom Properties (recommended for dynamic values)
.element {
  color: var(--color-primary);
  background: var(--color-background);
}

// SCSS Variables (for computed values)
.element {
  padding: spacing("4");
  font-size: font-size("lg");
}
```

### Responsive Design

```scss
.component {
  padding: spacing("4");

  @include respond-above("md") {
    padding: spacing("6");
  }

  @include respond-below("sm") {
    padding: spacing("2");
  }
}
```

### Common Mixins

```scss
.flex-container {
  @include flex-center; // Center items
  @include flex-between; // Space between items
}

.button {
  @include button-base; // Base button styles
  @include focus-visible; // Focus ring
}

.container {
  @include container; // Responsive container
}
```

## Customization

### Colors

Modify `abstracts/_variables.scss` to change the color palette:

```scss
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

### Breakpoints

Update the `$breakpoints` map in `abstracts/_variables.scss`:

```scss
$breakpoints: (
  "sm": 640px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
);
```

### Spacing

Modify the `$spacing` map for your preferred spacing scale:

```scss
$spacing: (
  "1": 0.25rem,
  "2": 0.5rem, // ... add your values
);
```

## Best Practices

1. **Use CSS Custom Properties** for values that might change (colors, spacing in components)
2. **Use SCSS Variables** for computed values and maps
3. **Prefer mixins** for reusable style patterns
4. **Follow BEM** naming convention for components
5. **Mobile-first** responsive design approach
6. **Semantic naming** for better maintainability

## Development

The SCSS is automatically compiled by Nuxt with hot-reloading in development mode. No additional build steps required!
