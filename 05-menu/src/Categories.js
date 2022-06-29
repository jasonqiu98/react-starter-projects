import React from 'react'
import data from './data'

const categories = data.map(item => item.category)
export const uniqueCategories = ["All", ...new Set(categories)]

const Categories = ({ id, setCategoryId }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((category, index) => (
        <button key={index} className='filter-btn'
          onClick={() => setCategoryId(index)}>
          {category}
        </button>
      )
      )}
    </div>
  )
}

export default Categories