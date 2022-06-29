import React, { useState }  from 'react'
import List from './List'
import data from './data'

// console.log(data)
// person: id, name, age, image

const App = () => {
  const [people, setPeople] = useState(data)
  const emptyList = () => {
    setPeople([])
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={emptyList}>Clear All</button>
      </section>
    </main>
  )
}

export default App