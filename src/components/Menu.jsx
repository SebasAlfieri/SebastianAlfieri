import React from 'react'
import styled from 'styled-components'
import LeftMenu from './LeftMenu'
import Projects from './Projects'
import Hello from './Hello'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from "react-router-dom";

const MenuMainContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #c7c7c7;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E5E5E5;
  border: 1px solid black;
  width: 95%;
  height: 90vh;
  box-shadow: 0px 0px 3px black;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

function Menu() {
  return (
      <MenuMainContainer>
        <MenuContainer>
          <LeftMenu/>
            <Routes>
              <Route path='/' element={<Hello/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </MenuContainer>
      </MenuMainContainer>
  )
}

export default Menu