import React from 'react'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import ContactMap from '../../components/Contact/ContactMap/ContactMap'
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

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