import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import Project from './Project'

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 2%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 70%;
  }
`

function Projects() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    document.title = `My Projects`;
  }, []);


  return (
    <ProjectsContainer  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="0"
    data-aos-offset="0">
      <Project
        img="watchme.jpg"
        link="https://watchmealfieri.vercel.app/"
        title="WatchMe"
        description="An e-commerce including a functional cart and back-end for products and orders management"
        uses="React Js - Firebase"/>
      <Project
        img="reflejar.jpg"
        link="https://reflejar-sebasalfieri.vercel.app/"
        title="Reflejar"
        description="A team freelance job where i worked as a developer for a data analysts group"
        uses="React Js" />
      <Project
        img="todito.jpg"
        link="https://sebasalfieri.github.io/Todito/"
        title="Drinking game"
        description="A simple drinking game i made to play with friends"
        uses="Js"/>
      <Project
        img="widgets.jpg"
        link="https://sebasalfieri.github.io/Widgets/"
        title="We-Widgets"
        description="Some simple widgets using different java script features as Local Storate, API - DOM and JSON"
        uses="Js"/>
      <Project
        img="lol.jpg"
        link="https://lolalfierii.netlify.app/"
        title="Game Homepage"
        description="A League of Legends webpage simulator"
        uses="Sass - Bootstrap"/>
      <Project
        img="" 
        link="https://watchmealfieri.vercel.app/"
        title="WIP" 
        description="WIP"
        uses="Js"/>
    </ProjectsContainer>
  )
}

export default Projects