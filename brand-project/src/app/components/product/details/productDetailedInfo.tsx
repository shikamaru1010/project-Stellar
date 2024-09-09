import { Grid, Icon, Segment } from 'semantic-ui-react'

export default function ProductDetailedInfo() {
  return (
    <div>
    <Segment.Group>

      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' name='header'/>
        </Grid.Column>
        <Grid.Column width={15}>
          <p style={{color: 'black'}}>Product Name</p>
        </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' name='info'/>
        </Grid.Column>
        <Grid.Column width={15}>
          <p style={{color: 'black'}}>Product description</p>
        </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='info' size='large' />
          </Grid.Column>
          <Grid.Column width={11}>
            <p style={{color: 'black'}}>Category</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
    </div>
  )
}
