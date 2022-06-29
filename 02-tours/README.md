## 02-tours

Key points

- Make async HTTP requests by `axios`

  - CORS issues: setting `proxy: "https://course-api.com/"` in `package.json`
  - The requests are sent **twice**
    - 1st: make sure the cross-origin request can succeed
    - 2nd: make the actual request
- Make sure `onClick=functionName` goes without any additional parentheses! Alternatively, always use arrow functions. If we don't use array functions or only function names, the page may experience repetitive (and unlimited) rendering
- Combine different parts within a single `<title>` when necessary: include both "Our Tours" and the underline in the title; include both the tour name and the price in the title...
- Make prices small titles, so they can be bold face!
- Read More vs Show Less

  - ES2016 template string -`` `${info.substring(0, 200)}` ``
  - `onClick={setReadMore(!readMore)}` to toggle the state
- Capitalized formats can be set in CSS files
- Use `{...tour}` to pass object key values on a child component
- REMEMBER!! Don't always add curly braces after the arrow functions because the curly braces will affect the rendering of JSX expressions
- Use `!==` for comparisons
