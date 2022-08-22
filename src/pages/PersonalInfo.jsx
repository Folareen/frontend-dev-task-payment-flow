import React from 'react'
import Header from '../components/Header'

const PersonalInfo = () => {
  return (
    <main>
      <Header />

      <form >
         <div className='input--container'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Opara Linus Ahmed' id='name' />
        </div>
         <div className='input--container'>
          <label htmlFor="email">Email Address <span className='required'>*</span> </label>
          <span className='info'>The purchase reciept would be sent to this address</span>
          <input type="email" placeholder='OparaLinusAhmed@devmail.com' id='email' />
        </div>
         <div className='input--container'>
          <label htmlFor="address1">Address 1</label>
          <input type="text" placeholder='The address of the user goes here' id='address1' />
        </div>
         <div className='input--container'>
          <label htmlFor="address2">Address 2</label>
          <input type="text" placeholder='and here' id='address2' />
        </div>
         <div className='select--container'>
           <div className='input--container'>
            <label htmlFor="lga">Local Government Area</label>
            <select id='lga'>
              <option value="Surulere" selected>
                Surulere
              </option>
            </select>
          </div>
           <div className='input--container'>
            <label htmlFor="state">State</label>
            <select id='state'>
              <option value="Lagos" selected>
                Lagos
              </option>
            </select>
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

export default PersonalInfo