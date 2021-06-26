# Markdown Editor web component
[Demo](./demo.html)

## Usage:

```html
<script defer src="./mde.min.js"></script>
<md-editor />
```

## Getting value:

```js
const mdEditor = document.querySelector("md-editor");

mdEditor.addEventListener("value-change", e => {
	console.log(e.detail);
});
```

## Customization

Using CSS Custom Properties

```css
    --mde-bg            /* Sets background. Default: #333*/
    --mde-col           /* Sets text color. Default: #eee*/
    --mde-border-radius /* Default: 5px */
    --mde-border        /* Default: 3px solid transparent */
    --mde-focus-shadow  /*Shadow used as a highligh on focus. Default: 0 0 0 2px rgba(0, 153, 255, 0.75)*/
    --mde-font-size     /* Default: 1rem */
    --mde-font          /* Font family. Default: monospace */
    --mde-line-height   /* Default: 2rem */
```
