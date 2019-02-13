import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import Chip from '../chip'
import Card from './UI/card'
import Title from './UI/title'
import Circle from './UI/circle'
import { Tags, TagTitle } from './UI/tags'
import { Content, ContentBox } from './UI/content'
import { InfoOwner, InfosPictures } from './UI/infos'

const Img = styled.img`
  width: 100%;
  border-radius: .2rem;
`
Img.displayName = 'Img'

const DATE_PARSE = 'YYYY-MM-DD HH:mm:ss'
const DATE_TO_PARSE = 'DD/MM/YYYY'

const CardComponent = ({
  img,
  title,
  tags,
  name,
  date,
  idPhoto,
  idUser
}) => {

  const mountChip = (item, key) => {
    return (
      <Chip key={key}>
        <span>{item}</span>
      </Chip>
    )
  }
  const valuesChip = tags.split(' ')
  const LINK_IMAGE_FLICKER = `https://www.flickr.com/photos/${idUser}/${idPhoto}/`
  return (
    <Card>
      <Img src={img} />
      <Content>
        <ContentBox title={title} titleBox="true">
          <Title
            href={LINK_IMAGE_FLICKER}
            target="_blank"
            title={title}>
            {title ? title : idPhoto}
          </Title>
        </ContentBox>
        <ContentBox>
          <TagTitle>Tags</TagTitle>
          <Tags>{valuesChip.map(mountChip)}</Tags>
        </ContentBox>
        <InfoOwner>
          <Circle>{`${name ? name[0] : 'N'}`}</Circle>
          <ContentBox>
            <InfosPictures>
              {name}
              <small>
                {moment(date, DATE_PARSE).format(DATE_TO_PARSE)}
              </small>
            </InfosPictures>
          </ContentBox>
        </InfoOwner>
      </Content>
    </Card>
  )
}

CardComponent.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.string,
  name: PropTypes.string,
  idPhoto: PropTypes.string.isRequired,
  idUser: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default CardComponent
