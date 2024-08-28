# Glowing Arrow Library

A simple jQuery plugin to create a glowing arrow effect that follows the mouse cursor.

## Usage

1. Include jQuery, `glowing-arrow.js`, and `glowing-arrow.css` in your HTML file.

2. Apply the effect to any element by calling `glowingArrow()` on a jQuery selector.

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://raw.githubusercontent.com/ankitnishad6313/glowing-mouse-arrow/master/glowing-arrow.css" />
<script src="https://raw.githubusercontent.com/ankitnishad6313/glowing-mouse-arrow/master/glowing-arrow.js"></script>

<script>
  $(document).ready(function () {
    $(selector).glowingArrow();
  });
</script>
