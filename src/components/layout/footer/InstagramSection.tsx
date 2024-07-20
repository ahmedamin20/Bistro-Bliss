import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { imagesArray } from './data'
const InstagramSection = () => {
    
  return (
    <div className='w-full flex  flex-col gap-[20px] md:w-1/3'>
      <h3>Follow Us On Instagram</h3>
      <Link href={""} className="flex flex-wrap flex-row w-full gap-[10px]">
      
      {imagesArray.map(item=><LinkImage key={item.id} src={item.src} />)}
      </Link>
    </div>
  )
}

export default InstagramSection

interface TLinkImageProps{
    src: StaticImageData;
    width?: number;
    height?: number;
    alt?: string;

}

const LinkImage = (props: TLinkImageProps)=>{
    return <Image loading='lazy' className='rounded-lg hover:blur-[1px] hover:shadow-lg transition-all duration-[750]' src={props.src} width={props.width || 200} height={props.height || 200} alt={props.alt||"image"}></Image>
  
}