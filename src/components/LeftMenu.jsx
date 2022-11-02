import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import KnowledgeItem from "./KnowledgeItem"
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #435058;
  color: #F1F2EE;

  @media (min-width: 768px) {
    width: 30%;
  }
`

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 20%;
  margin-left: 8%;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-left: 0;
  }
`

const TitleH1 = styled.h1`
display: flex;
justify-content: flex-end;
align-items: flex-start;
font-weight:300;

@media (min-width: 768px) {
    align-items: flex-end;
  }
`

const SubtitleH2 = styled.h2`
font-size: 1rem;
display: flex;
justify-content: center;
font-weight:300;
`

const Nav = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 20%;
  width: 100%;
  height: 20%;

  @media (min-width: 768px) {
    align-self: flex-start;
    align-items: flex-start;
    width: 50%;
    margin-left: 5%;
  }
  
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
  align-self: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 0;
  width: 80%;
  height: 50%;

  @media (min-width: 768px) {
    width: 50%;
    align-self: flex-start;
    margin-left: 5%;
  }
`

const Github = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  font-size: 1.5rem;
  margin-left: 5%;
  justify-content: flex-start;
  align-items: center;
`

const GithubIcon = styled.a`
  color: #DCF763;
  transition: 0.2s;

  &:hover{
    color: #e3f596;
    transform: scale(1.2);
  }
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
    <Github>
      <GithubIcon href='https://github.com/SebasAlfieri' target={"_blank"}>
        <FaGithub/>
      </GithubIcon>
    </Github>
  </LeftMenuContainer>
  )
}

export default LeftMenu