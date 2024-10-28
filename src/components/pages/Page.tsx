import React, { useState } from 'react'
import Home from './Home/Home'
import Transfer from './Transfer/Transfer'
import Credit from './Credit/Credit'

interface Props {
   sCurrPage:string
}

const [balance, setbalance] = useState(0)

export default function Page({sCurrPage}:Props) {
  return (
    <div className='page'>
      {sCurrPage== "Home" && <Home balance={balance}/>}
      {sCurrPage== "Credit" && <Credit/>}
      {sCurrPage== "Transfer" && <Transfer amount={12} balance={balance} creatd_at='1231231' from='avi' setBalance={setbalance} to='yosi'/>}
      {/* {sCurrPage == "Home" ? (
        <Home />
      ) : sCurrPage === "Credit" ? (
        <Credit />
      ) : (
        <Transfer />
      )} */}
      
      </div>
  )
}
