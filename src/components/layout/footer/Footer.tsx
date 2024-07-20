import React from 'react'
import LogoSection from './LogoSection'

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-grey-dark text-[#fff]'>
      <div className='w-full flex flex-col md:flex-row gap-[25px]'>
        <LogoSection/>
      </div>
    </footer>
  )
}

export default Footer
