import styled from 'styled-components'

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #007bff;
    border-color: #007bff;
    cursor: pointer;
    margin-top: .25rem;
    margin-bottom: .25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:hover {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
    }
`

Button.displayName = 'Button'

export default Button
