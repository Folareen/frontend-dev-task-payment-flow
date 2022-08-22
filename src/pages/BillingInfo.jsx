import React from 'react'
import Header from '../components/Header'

const BillingInfo = () => {
  return (
    <main>
      <Header />

      <form >
        <div className='input--container'>
          <label htmlFor="name">Opara Linus Ahmed</label>
          <input type="text" placeholder='Opara Linus Ahmed' id='name' />
        </div>
        <div className='input--container'>
          <label htmlFor="card-type">Card Type<span className='required'> *</span></label>
          <select id='card-type'>
            <option value="visa" selected>
              Visa
            </option>
          </select>
        </div>
        <div className='card--container'>
          <div className='input--container'>
            <label htmlFor="card-details">Card details <span className='required'> *</span></label>
            <input type="text" placeholder='44960   44960   44960   44960' id='card-details' />
          </div>
          <div className='input--container'>
            <label htmlFor="expiry-date">Expiry date <span className='required'> *</span></label>
            <input type="text" placeholder='04  /  23' id='expiry-date' />
          </div>
          <div className='input--container'>
            <label htmlFor="cvv">CVV <span className='required'> *</span></label>
            <input type="text" placeholder='923' id='cvv' />
          </div>
        </div>
        <div className='submit'>
          <button type='submit' className='submit--button'>Next</button>
          <button>Cancel Payment</button>
        </div>

      </form>
    </main>
  )
}

export default BillingInfo