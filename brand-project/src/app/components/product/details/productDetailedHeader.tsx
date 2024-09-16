import { NavLink } from 'react-router-dom'
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react'


export default function ProductDetailedHeader() {
  const productImageStyle={
    filter: 'brightness(30%)',
  }
  const productImageTextStyle={
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: "100%",
    height: 'auto',
    color: 'white'
  }


  return (
    <div style={{backgroundColor: 'black'}}>
      <Segment.Group>
        <Segment basic attached='top' style={{padding: '0'}}>
          <Image src={'/astronaut.jpg'} fluid style={productImageStyle}/>
          <Segment basic style={productImageTextStyle}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header size="huge"
                  content='Product Title'
                  style={{color: 'white'}}/>
                  <p>Product Title</p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
        <Segment attached='bottom'>
          <Button style={{backgroundColor: '#FF9F1C',color: 'white'}}>Add</Button>
          <Button style={{backgroundColor: '#023e8a',color: 'white'}}>Remove</Button>
          <Button as={NavLink} to='/contact' style={{backgroundColor: '#023e8a',color: 'white'}} floated='right'>
            Ask us about product
          </Button>
        </Segment>
      </Segment.Group>
    </div>
  )
}
