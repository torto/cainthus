import styled from 'styled-components'

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
`
Tags.displayName = 'Tags'

export const TagTitle = styled.p`
  text-align: center;
  margin-bottom: .6rem;
`
TagTitle.displayName = 'TagTitle'
