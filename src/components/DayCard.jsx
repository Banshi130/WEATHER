import React from 'react'
import { days } from '../constants'

export default ({ info }) => {
  const nameDay = days[new Date(info.dt_txt).getDay()]
  const weather = info.weather[0].description

  return null
}
