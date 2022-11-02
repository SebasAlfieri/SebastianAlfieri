import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
`

const AboutText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 30%;
  text-align: center;
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 2px solid #435058;
`

const AboutImg = styled.div`
  background-image: url("./images/photo.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
  border-radius: 50%;
  width:20%;
  height: 40%;
  margin-bottom: 5vh;
`

function About() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    document.title = `About me!`;
  }, []);

  return (
  <AboutContainer>
    <AboutImg data-aos="fade-up"
     data-aos-duration="1000"></AboutImg>
    <AboutText data-aos="fade-up"
     data-aos-duration="2000">
      I am a web developer from Buenos Aires, Argentina. highly motivated to create and grow in the programming world. I love learning and working with new technologies and I aspire to be the best developer I can become.
    </AboutText>
  </AboutContainer>
  )
}

export default About