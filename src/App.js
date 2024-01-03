import React, { useState } from 'react'
import { fetchData } from './service'
import DayCard from './components/DayCard'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])

  const search = async () => {
    if (!city) return setData([])

    const response = await fetchData(city)
    setData(response)
  }

  return (
    <div>
      <input onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => search()}>Search</button>
      {data.map((item) => (
        <DayCard info={item} />
      ))}
    </div>
  )
}

export default App
