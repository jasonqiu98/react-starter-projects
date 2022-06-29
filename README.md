This is a reproduction of all the React examples listed in the [repo](https://github.com/john-smilga/react-projects)

https://react-projects.netlify.app/

[YouTube Link](https://www.youtube.com/watch?v=a_7Z7C_JCyo)

React version: 18.2.0

## 01-birthday-reminder

Key points

- Creating a state by `useState()`
- Lifting up states to the parent node
- Using the `map()` function on an array
- New HTML tags: `<article>`, `<main>` and `<section>`

Some additional hints/caveats

- The curly braces `{}` are used to wrap all the Vanilla JS expressions. JSX expressions should NOT be wrapped around.
- `import { useState } from 'react'`
- Since all the JS files can be combined to a giant one eventually, we can use `index.css` to define all the CSS styles, include the file to `index.js` and then use any of the defined styles freely within the whole project.

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

## 03-reviews

- Install `react-icons`
  - `npm i react-icons`
- Write a swiper
- Use the following code to generate a nice profile picture container

```jsx
<div className="img-container">
  <img src={people[current].image} className="person-img" alt={people[current].name}/>
    <div className='quote-icon'>
      <FaQuoteRight />
    </div>
</div>
```

- Reduce the space between title and body: putting both of them within a single tag `<div>` (or `<section>`...)
- Random integer between [0, n]

```js
let newNum = Math.floor(Math.random() * n)
```

- Go Forward and Back

```js
// go back (add one `totalLength` to keep the remainer positive)
let newId = (current + totalLength - 1) % totalLength
// go forward
let newId = (current + 1) % totalLength
```

- We can add one assignment following `useState` to update some companion variables along with state changing

```js
const [current, setCurrent] = useState(0)
// every time `current` changes, person will change along
const person = people[current]
```

## 04-accordion

- Put a certain CSS `className` outside all components? Or outside each component?
  - In this example, every question has its own space, and the spaces of all components are separated. We should wrap the style on each component rather than all of them.
- We can use ` <button>` to wrap the react icons. For example

```jsx
<button className="btn" onClick={toggleReadMore}>
  { readMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
</button>
```

- Conditional Rendering
  - `cond ? A : B`
  - `cond && A`

## 05-menu

- Drop duplicates

```
const uniqueCategories = [... new Set(categories)]
```

- Title

```jsx
<div className='title'>
  <h2>Our Menu</h2>
  <div className='underline'></div>
</div>
```

- In an image path in data, say `./images/item-1.jpeg`, the current directory will be the public folder rather than the src folder
- `parseInt()` converts a float to int
