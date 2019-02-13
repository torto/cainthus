import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: .25rem;
  margin-bottom: .25rem;
`
Input.displayName = 'Input'

export default Input
