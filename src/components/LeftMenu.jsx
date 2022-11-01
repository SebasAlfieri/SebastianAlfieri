import React from 'react'
import styled from 'styled-components'
import KnowledgeItem from "./KnowledgeItem"

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
  return (
    <LeftMenuContainer>
    <TitlesContainer>
      <TitleH1>Sebastian Alfieri</TitleH1>
      <SubtitleH2>Web developer</SubtitleH2>
    </TitlesContainer>
    <Nav>
      <NavLinks>⚆<span>Projects</span></NavLinks>
      <NavLinks>⚆<span>Info</span></NavLinks>
      <NavLinks>⚆<span>Contact</span></NavLinks>
    </Nav>
    <Knowledge>
      <KnowledgeItem title="HTML" points="●●●●●●●●"/>
      <KnowledgeItem title="CSS" points="●●●●●●●○"/>
      <KnowledgeItem title="Js" points="●●●●●●○○"/>
      <KnowledgeItem title="React Js" points="●●●●●○○○"/>
    </Knowledge>
  </LeftMenuContainer>
  )
}

export default LeftMenu