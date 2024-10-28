import React from 'react'
import Details from './Details'

interface Props {
  balance:number
}

export default function Home({balance}:Props) {
  return (
    <>
    <Details name='avi' accountNumber='4123124' balance={balance}/>
     </>
  )
}
