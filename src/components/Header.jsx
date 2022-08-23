import React from 'react'
import { useLocation, Link } from 'react-router-dom'

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
            <Link to='/' className={highlight('/')}>Personal Info <span></span></Link>
            <Link to='/billing-info' className={highlight('/billing-info')}>Billing Info <span></span></Link>
            <Link to='/confirm-payment' className={highlight('/confirm-payment')}>Confirm Payment <span></span> </Link>
        </div>
    </header>
  )
}
export default Header