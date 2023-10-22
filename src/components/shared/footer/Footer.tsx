import React from 'react'
import DateHelper from '../../../utils/DateHelper'


function Footer() {
  
  return (
    <div className='app-footer bg-dark'>
      <p className='center text-light'>
      SoftProb@{DateHelper.getCurrentYear()}
      </p>
    </div>
  )
}

export default Footer