import React from 'react'
import Services from '../Services';
import Transactions from '../Transactions';
import Welcome from '../Welcome';

const Home = () => {
  return (
    <div>
        <Welcome />
        <Transactions />
        <Services />
    </div>
  )
}

export default Home;