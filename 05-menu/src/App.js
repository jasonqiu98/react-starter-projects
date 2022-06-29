import React, { useState } from 'react'
import Categories from './Categories'
import Menu from './Menu'

const App = () => {
  const [categoryId, setCategoryId] = useState(0)
  return (
    <div className='menu'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories id={categoryId} setCategoryId={setCategoryId}/>
      <Menu id={categoryId}/>
    </div>
  )
}

export default App