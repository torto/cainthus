import styled from 'styled-components'

export const InfoOwner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
`

InfoOwner.displayName = 'InfoOwner'

export const InfosPictures = styled.p`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  align-items: center;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  & small {
    font-weight: 100;
  }
`
InfosPictures.displayName = 'InfosPictures'
