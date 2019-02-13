import styled from 'styled-components'

export const Content = styled.div`
  padding: .5rem;
  width: 100%;
  box-sizing: border-box;
`
Content.displayName = 'Content'

export const ContentBox = styled.div`
  background: ${(props) => props.titleBox ? '#B9BBBD' : '#E9E9E9'};
  border-radius: .2rem;
  padding: .5rem;
  margin-bottom: .5rem;
  max-height: 7.2rem;
  overflow: auto;
  width: 100%;
  box-sizing: border-box;
`
ContentBox.displayName = 'ContentBox'
