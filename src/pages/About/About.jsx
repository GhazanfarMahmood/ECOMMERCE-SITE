import React from 'react'
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import AboutUs from '../../components/About/AboutUs/AboutUs'
import Services from '../../components/About/Services/Services'

const About = () => {
  return (
    <>
      <BreadCrumbLink pageName={"About"} />
     <AboutUs />
     <Services />
    </>
  )
}

export default About