import {
  DropdownMenu,
  DropdownItem,

  Dropdown,
} from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.
const DropdownExampleDropdown = () => (
  <Dropdown text=''>
    <DropdownMenu>
      <DropdownItem text='XS' />
      <DropdownItem text='S' />
      <DropdownItem text='M' />
      <DropdownItem text='L' />
      <DropdownItem text='XL' />
      <DropdownItem text='2XL' />
      <DropdownItem text='3XL' />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleDropdown