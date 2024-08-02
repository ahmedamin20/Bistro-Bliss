import PageHeader from '@/components/ui/PageHeader'
import React from 'react'
import Form from './Form'
import ContactFooter from './ContactFooter'

const Contact = () => {
  return (
    <div className="flex relative flex-col justify-center items-center bg-[#f9f9f7] overflow-hidden">
      <PageHeader
        title="Contact Us"
        description="We consider all the drivers of change gives you the components
        you need to change to create a truly happens."
      />
      <Form/>
      <ContactFooter />
      </div>
  )
}

export default Contact
