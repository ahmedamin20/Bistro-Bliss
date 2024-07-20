import React from 'react'
import LogoSection from './LogoSection'
import PagesSection from './PagesSection'
import InstagramSection from './InstagramSection'

const Footer = () => {
  return (
    <footer className='w-full p-4 bg-grey-dark text-[#fff]'>
      <div className='p-6 w-full flex justify-between flex-col md:flex-row gap-[25px]'>
        <LogoSection/>
        <PagesSection />
        <InstagramSection />
      </div>
    </footer>
  )
}

export default Footer
