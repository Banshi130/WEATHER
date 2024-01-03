export const fetchData = async (city = 'Moscow') => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
  )

  const parseResponse = await response.json()

  const list = parseResponse.list.filter((item, ind) => {
    if (!ind) return true

    const currentItem = new Date(item.dt_txt)
    const prevItem = new Date(parseResponse.list[ind - 1].dt_txt)

    return currentItem.getDay() !== prevItem.getDay()
  })

  return list
}
