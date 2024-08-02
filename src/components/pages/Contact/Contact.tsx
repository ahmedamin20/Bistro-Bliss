import PageHeader from '@/components/ui/PageHeader'
import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f9f9f7] overflow-x-hidden">
      <PageHeader
        title="Contact Us"
        description="We consider all the drivers of change gives you the components
        you need to change to create a truly happens."
      />
      <Form/>
      </div>
  )
}

export default Contact
