
import "../styles/Home.module.css";
import React from 'react'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('./home'))

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
