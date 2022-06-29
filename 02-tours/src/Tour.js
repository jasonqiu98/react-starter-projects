import { React, useState} from 'react'

const Tour = ({id, name, price, info, image, removeTour}) => {
  const [readMore, setReadMore] = useState(true)
  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? `${info.substring(0, 200)}...` : info}
          <button className="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "read more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>

    </article>
  )
}

export default Tour