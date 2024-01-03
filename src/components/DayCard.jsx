import React from 'react'
import './DayCard.css';

export default ({ nameDay = 'nameDay', temp = 'temp' }) => {
  return <div className='next_day'>
    <p >
      {nameDay}
    </p>
    <img src="" alt="" />
    <p className='weekday'>
      {temp}
    </p>
   
  </div>
}
