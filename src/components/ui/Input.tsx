import cn from '@/utils/cn'
import React from 'react'

type TInput = {
    label: string
    placeholder: string
    type: string,
    name: string,
    inputClassName?: string,
    labelClassName?: string,
    containerClassName ?: string,
}

const Input = (props: TInput) => {
  return (
<div className={cn("",props.containerClassName)}>
  <label htmlFor={props.name} className={cn("block text-lg font-bold  text-gray-700", props.labelClassName)}> {props.label} </label>

  <input
    type={props.type}
    id={props.name}
    name={props.name}
    placeholder={props.placeholder}
    className={cn("mt-1 p-4 w-full rounded-3xl border-[2px] focus-within:border-gray-200 focus-visible:!outline-none focus:border-gray-200 border-gray-200 text-lg sm:text-md", props.inputClassName)}
  />
</div>
  )
}

export default Input
