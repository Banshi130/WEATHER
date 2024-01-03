import React, { useState } from 'react'
import { fetchData } from './service'
import DayCard from './components/DayCard'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState([])

  const search = async () => {
    if (!city) return setData([])

    const response = await fetchData(city)
    setData(response)
  }

  const handlerInput = (e) => {
    e.target.value = e.target.value.trim().replace(/[Aа-яЯЁё\d\s]+/g, '')
  }

  return (
    <div>
      <input
        onChange={(e) => setCity(e.target.value)}
        onInput={(e) => handlerInput(e)}
        placeholder="Enter a City..."
      />
      <button onClick={() => search()}>Search</button>
      <div className="list-cards">
        {data.map((item, ind) => {
          if (!ind) return null

          return <DayCard info={item} key={item.dt} />
        })}
        {!data.length && <div>Not Found</div>}
      </div>
    </div>
  )
}

export default App
