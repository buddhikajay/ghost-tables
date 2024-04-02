# Ghost Tables

Replaces HTML `<table>` elements with a sortable and more user friendly version. Originally created to be used with Markdown tables in Ghost.

```html
<head>
  ......
  <script
    defer="defer"
    src="https://cdn.jsdelivr.net/gh/buddhikajay/ghost-tables@main/build/static/js/main.1.0.0.js"
  ></script>
  <link
    href="https://cdn.jsdelivr.net/gh/buddhikajay/ghost-tables@main/build/static/css/main.1.0.0.css"
    rel="stylesheet"
  />
  <script></script>
  ......
</head>
<body></body>
<script>
  document.onload = function () {
    if (window.ghostTables) {
      window.ghostTables();
    }
  };
</script>
```
