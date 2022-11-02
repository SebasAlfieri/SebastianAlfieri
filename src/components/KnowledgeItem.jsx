import React from 'react'
import styled from 'styled-components'

const KnowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`

const Title = styled.div`
  display: flex;
  width: 45%;
  text-align: center;
`

const Points = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #F1F2EE;
  border-radius: 25px;
  background-color: #2f383d;
  width: 55%;
  color: #DCF763;
`

function KnowledgeItem(props) {
  
  let { title, points, animation } = props

  return (
    <KnowContainer 
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration={animation}>
      <Title>{title}</Title>
      <Points>{points}</Points>
    </KnowContainer>
  )
}

export default KnowledgeItem