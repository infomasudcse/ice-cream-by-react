import React from 'react'
import classes from './Scoop.module.css'

const Scoop = () => {
    return (
        <div>
             <div className={ [classes.scoop, classes.orange].join(' ') }></div>
        </div>
    )
}

export default Scoop
