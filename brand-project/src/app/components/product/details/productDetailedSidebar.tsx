import { Segment, Item } from "semantic-ui-react";

export default function ProductDetailedSidebar() {
  return (
    <div>
      <Segment
        textAlign='center'
        style={{border: 'none',backgroundColor: '#023e8a'}}
        attached='top'
        secondary 
        inverted
        
        >
          2 people want this product
        </Segment>
        <Segment attached>
          <Item.Group relaxed divided>
            <Item style={{position: 'relative'}}>
              <Item.Image size='tiny' src='/user.png' />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>Ratko</span>
                </Item.Header>
              </Item.Content>
            </Item>
            <Item style={{position: 'relative'}}>
              <Item.Image size='tiny' src='/user.png' />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>Nikola</span>
                </Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
    </div>
  )
}
