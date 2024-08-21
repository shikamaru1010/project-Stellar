import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleHeader = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu className='dropdown-menu'>
      <DropdownHeader icon='tags' content='Filter by tag' />
      <DropdownItem>best sellers</DropdownItem>
      <DropdownItem>alphabetically A-Z</DropdownItem>
      <DropdownItem>alphabetically Z-A</DropdownItem>
      <DropdownItem>price,low to high</DropdownItem>
      <DropdownItem>price, high to low</DropdownItem>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleHeader
