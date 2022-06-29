import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [current, setCurrent] = useState(0)
  const person = people[current]

  const totalLength = people.length

  const goBack = () => {
    let newId = (current + totalLength - 1) % totalLength
    setCurrent(newId)
  }

  const goForward = () => {
    let newId = (current + 1) % totalLength
    setCurrent(newId)
  }

  const goRandom = () => {
    let newId = Math.floor(Math.random() * totalLength)
    while (newId === current) {
      newId = Math.floor(Math.random() * totalLength)
    }
    setCurrent(newId)
  }

  return (
    <div className="review">
      <div className="img-container">
        <img src={person.image} className="person-img" alt={person.name} />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <div>
        <h4 className="author">{person.name}</h4>
        <div className="job">{person.job}</div>
      </div>
      <p>
        {person.text}
      </p>
      <div>
        <FaChevronLeft className="prev-btn" onClick={goBack}/>
        <FaChevronRight className="next-btn" onClick={goForward}/>
      </div>
      <button className="random-btn" onClick={goRandom}>
        suprise me
      </button>
    </div>
  )
};

export default Review
