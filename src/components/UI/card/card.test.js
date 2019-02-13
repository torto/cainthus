import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Card from './index'

describe('CardComponent', () => {
  it('execute success', async () => {
    const options = {
      img: 'https://static1.squarespace.com/static/5b8e877d85ede1f7c38ec536/t/5be4954baa4a9994955fc3a5/1541707094720/webimag1a.jpeg',
      title: 'Title Card',
      tags: 'home art',
      name: 'A Name Person',
      date: '1988-11-25 10:45:15',
      idPhoto: '123',
      idUser: '1@n'
    }
    const wrapper = shallow(<Card {...options} />)

    const img = wrapper.find('Img').props('src').src
    expect(img).to.equal(options.img)

    const title = wrapper.find('Title')
    const titleText = title.text()
    const titleHref = title.prop('href')
    expect(titleText).to.equal(options.title)
    expect(titleHref).to.equal(`https://www.flickr.com/photos/${options.idUser}/${options.idPhoto}/`)


    const chips = wrapper.find('Chip')
    const chipFirst = chips.at(0).text()
    const chipSecond = chips.at(1).text()
    expect(chipFirst).to.equal('home')
    expect(chipSecond).to.equal('art')

    const circle = wrapper.find('Circle').text()
    expect(circle).to.equal('A')

    const name = wrapper.find('InfosPictures').text()
    expect(name).to.equal(`${options.name}25/11/1988`)
  })
  it('execute without name and title', async () => {
    const options = {
      img: 'https://static1.squarespace.com/static/5b8e877d85ede1f7c38ec536/t/5be4954baa4a9994955fc3a5/1541707094720/webimag1a.jpeg',
      title: '',
      tags: 'home art',
      name: '',
      date: '1988-11-25 10:45:15',
      idPhoto: '123',
      idUser: '1@n'
    }
    const wrapper = shallow(<Card {...options} />)

    const title = wrapper.find('Title')
    const titleText = title.text()
    expect(titleText).to.equal(options.idPhoto)

    const circle = wrapper.find('Circle').text()
    expect(circle).to.equal('N')
  })

})
