import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setTours(response.data)
        setLoading(false)
      })
  }, [])

  return (
    <main>
      {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour}/>}
    </main>
  )
}

export default App