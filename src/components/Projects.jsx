import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  background-color: #F1F2EE;
  width: 70%;
  height: 100%;
  padding: 2%;
`


function Projects() {
  return (
    <ProjectsContainer>
      <Project
        img="fotoejemplo.png"
        link="https://watchmealfieri.vercel.app/"
        title="WatchMe"
        description="An e-commerce webpage including functional cart and back-end"
        uses="React Js - Firebase"/>
      <Project
        img="fotoejemplo.png"
        link="https://reflejar-sebasalfieri.vercel.app/"
        title="Reflejar"
        description="A team freelance job where i worked as a developer for a data analysts group"
        uses="React Js"/>
      <Project
        img="fotoejemplo.png"
        link="https://sebasalfieri.github.io/Todito/"
        title="Drinking game"
        description="A simple drinking game i made to play with my frinds"
        uses="Js"/>
      <Project
        img="fotoejemplo.png"
        link="https://sebasalfieri.github.io/Widgets/"
        title="We-Widgets"
        description="Some simple widgets using different java script functions as Local Storate, API - DOM and JSON"
        uses="Js"/>
      <Project
        img="fotoejemplo.png"
        link="https://lolalfierii.netlify.app/"
        title="Game Homepage"
        description="A League of Legends webpage simulator"
        uses="Sass - Bootstrap"/>
      <Project
        img="fotoejemplo.png" 
        link="https://watchmealfieri.vercel.app/"
        title="WIP" 
        description="WIP"
        uses="Js"/>
    </ProjectsContainer>
  )
}

export default Projects