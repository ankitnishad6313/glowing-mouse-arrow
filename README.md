# Glowing Arrow Library

A simple jQuery plugin to create a glowing arrow effect that follows the mouse arrow.

## Usage

1. Include jQuery, `glowing-arrow.js`, and `glowing-arrow.css` in your HTML file.

2. Apply the effect to any element by calling `glowingArrow()` on a jQuery selector.

```htm
<div id='box'></div>

<link rel="stylesheet" href="https://ankitnishad6313.github.io/glowing-mouse-arrow/glowing-arrow.css" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://ankitnishad6313.github.io/glowing-mouse-arrow/glowing-arrow.js"></script>


<script>
  $(document).ready(function () {
    $('#box').glowingArrow();
  });
</script>
