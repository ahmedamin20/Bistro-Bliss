"use client"
import { CustomButton } from '@/components/ui/CustomButton'
import { filterData } from './filterData'
import { useState } from 'react'
import { menuItems } from './data'
import MenuCard from './MenuCard'
import { DESHES_ENUM } from '@/constants/enums/deshesCategriesEnum'

const MenuSection = () => {
  const [filter, setFilter] = useState(0);
  return (
    <div className='flex flex-col w-full gap-[20px]'>
      <div className='flex flex-row justify-evenly items-center'>
        {filterData.map(item =>  (<CustomButton key={item.id} className={`${item.id == filter && "bg-red text-white"}`} onClick={()=>setFilter(item.id)} title={item.name} />))}
      </div>
      <div className='flex flex-col md:flex-row p-9 flex-wrap justify-evenly items-center'>
        {
          menuItems.map(item =>
          (filter == DESHES_ENUM.ALL || item.type === filter) && 
          <MenuCard 
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.desc}
            price={item.price}

          />)
        }
        
      </div>
    </div>
  )
}

export default MenuSection
