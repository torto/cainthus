import styled from 'styled-components'

const Chip = styled.div`
  color: rgba(0, 0, 0, 0.87);
  height: 32px;
  cursor: default;
  border: none;
  display: inline-flex;
  outline: none;
  padding: 0;
  font-size: 0.8125rem;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  border-radius: 16px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: #cecece;
  margin: .1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  & span {
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
  }
`
Chip.displayName = 'Chip'

export default Chip
