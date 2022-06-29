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
