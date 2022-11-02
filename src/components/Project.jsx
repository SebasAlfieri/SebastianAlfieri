import React, { useState } from 'react'
import styled from 'styled-components'



const ProjectContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #131313;
  background-color: #fff;
  width: 80%;
  height: 80%;
  margin-bottom: 10vh;
  transition: 0.3s;
  color: black;
  text-decoration: none;
  box-shadow: 1px 1px 5px black;

  @media (min-width: 768px) {
    height: 50%;
    width: 40%;
  }

  &:hover{
    transform: scale(1.1)
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ProjectText = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectTitle = styled.h3`
  width: 100%;
  height: 25%;
  margin-top: 10px;
  text-align: center;
  padding-top: 1px solid #131313;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const ProjectDescription = styled.p`
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const ProjectHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  color: white;
  background-color: #131313;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
`

function Project(props) {
  let { img, description, title, uses, link } = props

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <ProjectContainer href={link} target="_blank" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ProjectImage style={{backgroundImage: `url(images/${img})`}}></ProjectImage>
      <ProjectText>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectText>
      {isHovering && <ProjectHover>{uses}</ProjectHover>}
    </ProjectContainer>
  )
}

export default Project