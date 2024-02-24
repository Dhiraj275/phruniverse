import React from 'react'
import Header from "@/components/header"
import Contact from "@/components/contact"
const About = () => {
  return (
    <>
      <Header />
      <div className="common-section-2 about-us">
        <div className="wrap">
          <div className="left">
            <h5 className="section-heading">About Us</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>
              Facilis dolorum vero obcaecati saepe amet aperiam dicta corporis at
              dignissimos sequi.
            </p>
            <p>
              Quibusdam laudantium, quos alias rem ex voluptatibus magni sit, sequi
              iusto consequuntur id minus
            </p>
            <p>
              laboriosam porro impedit unde voluptas vitae sapiente eligendi
              mollitia repellendus et facere sed!
            </p>
          </div>
          <div className="right">
            <img src="/images/camera2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="common-section-2" style={{ background: "#050505" }}>
        <Contact />
      </div>
    </>

  )
}

export default About