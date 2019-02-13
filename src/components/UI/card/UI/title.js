import styled from 'styled-components'

const Title = styled.a`
  width: 100%;
  color: rgba(0, 0, 0, 0.87);
  font-size: .9rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden !important;
  text-overflow: ellipsis;
  text-align: center;
`
Title.displayName = 'Title'

export default Title
