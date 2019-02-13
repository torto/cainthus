import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../input'
import Button from '../button'

const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
`

const SearchContent = styled.div`
  width: 50%
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content:center;
`

const strings = {
  search: 'Search',
  tags: 'Insert here your tags'
}

const ENTER = 'Enter'

const SearchComponent = ({onChangeInput, handleClick}) => {

  const onEnter = (e) => {
    if (e.key === ENTER) {
      handleClick()
    }
  }

  return (
    <Header>
      <SearchContent>
        <Input
          name="search"
          placeholder={strings.tags}
          onChange={onChangeInput}
          onKeyPress={onEnter}/>
        <Button type="button" onClick={handleClick}>{strings.search}</Button>
      </SearchContent>
    </Header>
  )
}

SearchComponent.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SearchComponent
