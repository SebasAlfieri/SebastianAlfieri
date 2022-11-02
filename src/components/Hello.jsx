import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

const HelloContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  background: linear-gradient(-45deg, #82878a, #E5E5E5, #E1E1E1, #82878a);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`

const HelloTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  width: 50%;
  height: 30%;
  border-radius: 25px;
`

const HelloTitle = styled.h1`
font-weight: 300;
`

const HelloSubtitle = styled.h3`
font-weight: 300;
font-style: italic;
`

function Hello() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    document.title = `Sebastian Alfieri`;
  }, []);

  return (
    <HelloContainer >
      <HelloTextContainer data-aos="fade-up"
     data-aos-duration="3000">
        <HelloTitle>Hello!</HelloTitle>
        <HelloSubtitle>How do you take your coffee? ☕</HelloSubtitle>
      </HelloTextContainer>
    </HelloContainer>
  )
}

export default Hello