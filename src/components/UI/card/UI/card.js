import styled from 'styled-components'

const Card = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: .5rem;
  &:hover:before {
    background: rgba(0, 0, 0, .1);
    border-radius: .2rem;
    content: " " !important;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`
Card.displayName = 'Card'
export default Card
