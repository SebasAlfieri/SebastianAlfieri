import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import KnowledgeItem from "./KnowledgeItem"
import { Link } from "react-router-dom";

const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  background-color: #435058;
  color: #F1F2EE;
`

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 20%;
`

const TitleH1 = styled.h1`
display: flex;
justify-content: center;
align-items: flex-end;
font-weight:300;
`

const SubtitleH2 = styled.h2`
font-size: 1rem;
display: flex;
justify-content: center;
align-items: flex-end;
font-weight:300;
`

const Nav = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 5%;
  width: 50%;
  height: 20%;
`

const NavLinks = styled.div`
  width:fit-content;
  transition: 0.3s;
    &:hover{
      cursor: pointer;
      span{
        color: #DCF763;
        font-weight: 600;
        text-decoration: underline #DCF763;
      }
  }
`

const Knowledge = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 5%;
  width: 50%;
  height: 50%;
`

function LeftMenu() {

  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <LeftMenuContainer>
    <TitlesContainer>
      <TitleH1 data-aos="fade-down"
      data-aos-duration="2000">Sebastian Alfieri</TitleH1>
      <SubtitleH2 data-aos="fade-down"
      data-aos-duration="1000">Web developer</SubtitleH2>
    </TitlesContainer>
    <Nav>
      <Link data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500" style={{textDecoration:"none", color:"#F1F2EE"}} to="/about">
        <NavLinks>⚆<span> About</span></NavLinks>
      </Link>
      <Link data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="1000" style={{textDecoration:"none", color:"#F1F2EE"}} to="/projects">
        <NavLinks>⚆<span> Projects</span></NavLinks>
      </Link>
      <Link data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="1500" style={{textDecoration:"none", color:"#F1F2EE"}} to="/contact">
        <NavLinks>⚆<span> Contact</span></NavLinks>
      </Link>
    </Nav>
    <Knowledge>
      <KnowledgeItem title="HTML" points="●●●●●●●●" animation="2000"/>
      <KnowledgeItem title="CSS" points="●●●●●●●○" animation="2300"/>
      <KnowledgeItem title="Js" points="●●●●●●○○" animation="2600"/>
      <KnowledgeItem title="React Js" points="●●●●●○○○" animation="3000"/>
    </Knowledge>
  </LeftMenuContainer>
  )
}

export default LeftMenu