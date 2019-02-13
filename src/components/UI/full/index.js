import React from 'react'
import styled from 'styled-components'

const EmptyContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 5rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.75);
  margin-top: 5rem;
`
const EmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`

const TextInformation = styled.h1`
  height: 100%;
  text-align: center;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 600;
`
TextInformation.displayName = 'TextInformation'

const strings = {
  full: 'All Itens loaded'
}

const FullLoadComponent = () => {
  return (
    <EmptyContainer>
      <EmptyContent>
        <TextInformation>{strings.full}</TextInformation>
      </EmptyContent>
    </EmptyContainer>
  )
}

export default FullLoadComponent
