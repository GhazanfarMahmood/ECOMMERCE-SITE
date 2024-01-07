import React from 'react'

//Contact Map css
import './ContactMap.scss'

const ContactMap = () => {
  return (
    <>
    <div className="contact-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274167598!2d74.00472289272936!3d31.483103659918054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703344420380!5m2!1sen!2s"  allowFullScreen="" referrerPolicy="no-referrer-when-downgrade" loading="lazy" className='map'></iframe>
    </div></>
    
  )
}

export default ContactMap