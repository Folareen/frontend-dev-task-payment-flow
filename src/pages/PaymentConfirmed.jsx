import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const PaymentConfirmed = () => {
  return (
    <div className='payment--confirmed'>
      <div className='check'>
        <FaCheck/>
      </div>
      <h1>
        Purchase Completed
      </h1>
      <p>
        Please check your email for details concerning 
        this transaction
      </p>
      <Link to='/'>
        Return Home
      </Link>
    </div>
  )
}

export default PaymentConfirmed