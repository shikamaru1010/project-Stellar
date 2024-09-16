import { Segment} from "semantic-ui-react";
import Pagination from "../../../layout/pagination/pagination";

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
          people who want this product
        </Segment>
        <Segment attached>
          <Pagination />
        </Segment>
    </div>
  )
}
