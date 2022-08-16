import classes from './Home.module.css'
import React from 'react'
import Homebar from '../components/homebar/Homebar'
import Toolbar from '../components/toolbar/Toolbar'
const Home = () => {
  return (
    <div className={classes.home}>
        <Toolbar/>
        <Homebar/>
    </div>
  )
}

export default Home