import React from 'react'
import data from './data'
import { uniqueCategories } from './Categories'

const Menu = ({ id }) => {
  const category = uniqueCategories[id]
  const items = (id === 0 ? 
    data : 
    data.filter(item => item.category === category)
  )
  return (
    <div className="section-center">
      {items.map(item => 
        <div key={item.id} className="menu-item">
          <img className="photo" src={item.img} alt={item.title}/>
          <div className='item-info'>
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">${parseInt(item.price)}</h4>
            </header>
            <div className="item-text">{item.desc}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu