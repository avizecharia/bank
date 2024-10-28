import React, { useState } from 'react'
import Nav from './components/Nav'
import Page from './components/pages/Page'

export default function App() {
  const [sCurrPage, setSCurrPage] = useState("Home")
  return (
    <div className='app'>
      <Page sCurrPage={sCurrPage} />
      <Nav setSCurrPage={setSCurrPage} />
    </div>
  )
}
