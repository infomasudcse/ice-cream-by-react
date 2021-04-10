import React from 'react'
import icecream from '../../assets/images/icecream.svg'
import logo from '../../assets/images/logo.svg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
        <div className="container">
          <div>
            <img className={classes.logo} src={icecream} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={logo} alt="React" className={classes.reactlogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default Header
