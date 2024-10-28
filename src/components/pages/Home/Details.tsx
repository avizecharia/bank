import React from 'react'

interface Props {
    name:string,
    accountNumber:string
    balance:number
}

export default function Details({name,accountNumber,balance}:Props) {
  return (
    <div>
        <p>{name}</p>
        <p>{accountNumber}</p>
        <p>{balance} $ {balance > 0 ? "😄" :"😪"}</p>
    </div>
  )
}
