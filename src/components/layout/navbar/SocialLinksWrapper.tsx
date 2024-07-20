import React from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi'

const SocialLinksWrapper = () => {
  return (
    <div className="hidden md:block w-full p-3 px-[5rem] bg-grey-dark text-[#fff]">
            <div className="flex flex-row gap-[15px]">
                <div className="flex gap-[10px] flex-row">
                    <BiPhone className="mt-1"/>
                    <p className="">(414) 857 - 0107</p>
                </div>
                <div className="flex gap-[10px] flex-row">
                    <BiMailSend className="mt-1"/>
                    <p className="">yummy@bistrobliss</p>
                </div>
            </div>
        </div>
  )
}

export default SocialLinksWrapper
