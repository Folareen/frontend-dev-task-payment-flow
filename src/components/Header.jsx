import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    const highlight = (pathname) => {
        if (location.pathname === pathname){
            return 'current'
        } 
    }
  return (
    <header>
        <h2>
            Complete your Purchase
        </h2>
        <div>
            <p className={highlight('/')}>Personal Info <span></span></p>
            <p className={highlight('/billing-info')}>Billing Info <span></span></p>
            <p className={highlight('/confirm-payment')}>Confirm Payment <span></span> </p>
        </div>
    </header>
  )
}
export default Header