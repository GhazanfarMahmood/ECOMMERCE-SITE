import React from 'react'

//CrumbLink component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

//Components of about page
import AboutUs from '../../components/About/AboutUs/AboutUs'
import Services from '../../components/About/Services/Services'

const About = () => {
  return (
    <>
      <BreadCrumbLink pageName={"About"} />
      <div className="ms-3">
     <AboutUs />
     <Services />
     </div>
    </>
  )
}

export default About