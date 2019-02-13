import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StackGrid from "react-stack-grid"
import Waypoint from 'react-waypoint'
import { CirclesToRhombusesSpinner } from 'react-epic-spinners'
import Container from '../UI/container'
import Search from '../UI/search/search'
import Card from '../UI/card'
import EmptySearch from '../UI/empty'
import FullLoad from '../UI/full'
import ErrorRequest from '../UI/error'
import { getPhotosByTag } from '../../modules/photos/actions/request'
import { cleanRequestPhotos } from '../../modules/photos/actions/clean'

const StackGridSpace = styled(StackGrid)`
  margin-top: 4.5rem;
`

const Spinner = styled(CirclesToRhombusesSpinner)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`

const COLOR_SPINNER = '#414244'
const COLUND_SIZE_GRID = '20%'
const PAGE_MAX = 50

export class HomeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      tag: '',
      tagInput: ''
    }
    this.scrollParentRef = React.createRef()
    this.mountCard = this.mountCard.bind(this)
    this.loadMoreItens = this.loadMoreItens.bind(this)
    this.changeTagInput = this.changeTagInput.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
  }

  changeTagInput(e) {
    this.setState({ tagInput: e.target.value })
  }

  handleChangeTag() {
    window.scrollTo(0, 0)
    const { cleanRequestPhotos } = this.props
    cleanRequestPhotos()
    this.setState({
      tag: this.state.tagInput.trim().split(' ').join(','),
      page: 0
    }, () => this.loadMoreItens())
  }

  loadMoreItens() {
    const {
      getPhotosByTag
    } = this.props
    this.setState({page: this.state.page + 1}, () => {
      const { tag, page } = this.state
      getPhotosByTag(tag, page)
    })
  }

  mountCard() {
    const { photos: { data  } } = this.props
    return data.map((item) => (
      <Card
        key={item.id}
        date={item.datetaken}
        idPhoto={item.id}
        idUser={item.owner}
        name={item.ownername}
        tags={item.tags}
        title={item.title}
        img={item.url_m}
      />
    ))
  }

  isEmptyRender() {
    const { tag } = this.state
    return !tag && !this.isError()
  }

  isListLoad() {
    const { photos: { data } } = this.props
    return !this.isEmptyRender() && !!data.length
  }

  isFullLoad() {
    const { page } = this.state
    return page >= PAGE_MAX
  }

  isError() {
    const { photos } = this.props
    return photos.error
  }

  render() {
    const { photos: { loading } } = this.props
    return (
      <Container ref={this.scrollParentRef}>
        <Search
          onChangeInput={this.changeTagInput}
          handleClick={this.handleChangeTag} />

        {this.isEmptyRender() && <EmptySearch />}
        {this.isListLoad() && <StackGridSpace
          duration={0}
          itemComponent="div"
          monitorImagesLoaded={true}
          appearDelay={15}
          columnWidth={COLUND_SIZE_GRID}>
          {this.mountCard()}
          {this.renderInfiniteScoll()}
        </StackGridSpace>
        }
        {loading && <Spinner color={COLOR_SPINNER} />}
        {this.isFullLoad() && <FullLoad />}
        {this.isError() && <ErrorRequest />}
      </Container>
    )
  }

  renderInfiniteScoll() {
    const { photos: { loading } } = this.props
    const { page } = this.state
    if (!loading && page < PAGE_MAX) {
      return (<Waypoint onEnter={this.loadMoreItens}/>)
    }
  }

}

HomeComponent.propTypes = {
  getPhotosByTag: PropTypes.func.isRequired,
  cleanRequestPhotos: PropTypes.func.isRequired,
  photos: PropTypes.object
}

export const mapStateToProps = ({
  photos: { photos }
}) => ({photos})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getPhotosByTag,
  cleanRequestPhotos
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent)
