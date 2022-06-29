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
