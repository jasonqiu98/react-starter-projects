import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info}) => {
  const [readMore, setReadMore] = useState(true)
  const toggleReadMore = () => {
    setReadMore(!readMore)
  }
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleReadMore}>
          { readMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      { !readMore && <p>{info}</p>}
    </div>
  )
}

export default Question