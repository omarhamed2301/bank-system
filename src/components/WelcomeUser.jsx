import React from 'react'
import { useSelector } from 'react-redux'

export default function WelcomeUser() {
    const customer = useSelector((store) => store.customer)
  return (
    <h3 className='mb-3'>Welcome, {customer.fullName}.</h3>
  )
}
