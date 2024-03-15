import React from 'react'

//CrumbLink component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

//Contact Components for pages
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import ContactMap from '../../components/Contact/ContactMap/ContactMap'

const Contact = () => {
  return (
    <>
    <BreadCrumbLink pageName={'Contact Us'}/>
    <div className='ms-3'>
    <ContactMap />
    <ContactForm />
    </div>
    </>
  )
}

export default Contact