import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const ConfirmPayment = () => {
  const navigate = useNavigate()

  const next = (e) => {
    e.preventDefault()
    navigate('/payment-confirmed')
  }

  return (
    <section>
      <div>
        <Header/>
      </div>
      <div className='confirm--payment'>
        <div className='confirm--payment--header'>
          <h4>
            Item Name
          </h4>
          <p>
            #Price
          </p>
        </div>
        <div className='confirm--payment--body'>
          <div>
            <p>Data science and usability</p>
            <p>50,000.00</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>0.00</p>
          </div>
        </div>
        <div className='confirm--payment--footer'>
          <div>
            <p>Total</p>
            <p>50,000.00</p>
          </div>

        </div>
      </div>
      <div className='submit'>
        <button className='submit--button' onClick={next}>Pay</button>
        <button>Cancel Payment</button>
      </div>
    </section>
  )
}

export default ConfirmPayment