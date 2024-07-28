import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface TMenuCardProps {
    image: StaticImageData,
    title: string,
    price: number
    description: string
}
const MenuCard = (props: TMenuCardProps) => {
  return (
    <div className='w-full hover:cursor-pointer md:w-[23%] gap-y-2 flex flex-col border-gray-500 border rounded-2xl my-3 hover:shadow-xl transition-all duration-500'>
      <Image className='w-full object-cover' src={props.image} alt='image' width={300} height={300} loading='lazy'/>
      <div className='p-5 flex text-center flex-col justify-center items-center'>
      <span className='text-red text-[25px]'>$ {props.price}</span>
        <span className='text-black font-bold text-[20px]'>{props.title}</span>
        <span className='text-gray-500 text-[14px]'>{props.description}</span>
      </div>
    </div>
  )
}

export default MenuCard
