import React from 'react'

interface Props {
  from:string
  to:string
  creatd_at :string
  amount:number
  balance:number
  setBalance:(num:number)=>void
}

export default function Transfer({from,to,creatd_at,amount,balance,setBalance}:Props) {

  return (
    <div>{from}</div>
  )
}
