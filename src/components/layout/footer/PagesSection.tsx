import { NavLinks } from '@/constants/routes/navlinks'
import Link from 'next/link'
import React from 'react'

const PagesSection = () => {
  return (
    <div className='w-full flex flex-col gap-[20px] md:w-[25%]'>
        <h4>Pages</h4>
        <div className='flex flex-row md:flex-col gap-[10px] md:gap-[15px]'>

      {NavLinks.map(item=><Link className='text-text-grey' key={item.id} href={item.href}>{item.title}</Link>)}
        </div>
    </div>
  )
}

export default PagesSection
