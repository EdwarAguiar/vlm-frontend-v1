import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../containers/Home'
import { Store } from '../containers/Store'
import { AboutVLM } from '../containers/AboutVLM'
import { Checkout } from '../containers/Checkout'
import { Information } from '../containers/Information'
import { Payment } from '../containers/Payment'
import { Success } from '../containers/Success'
import { NotFound } from '../containers/NotFound'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/store' element={ <Store /> } />
            <Route path='/about' element={ <AboutVLM /> } />
            <Route path='/checkout/' element={ <Checkout /> } />
            <Route path='/checkout/information' element={ <Information /> } />
            <Route path='/checkout/payment' element={ <Payment /> } />
            <Route path='/checkout/success' element={ <Success /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
  )
}

export { App } 