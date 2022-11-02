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
  width: 100vw;
  background-color: #E1E1E1;
`

const MenuContainer = styled.div`
  display: flex;
  background-color: #E5E5E5;
  border: 1px solid black;
  width: 95vw;
  height: 90vh;
  box-shadow: 0px 0px 3px black;
`

const MenuSpacing = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
background-color: #c1f9f9;
height: 80vh;
width: 2.5vw;
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