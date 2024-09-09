import { Link, useNavigate } from "react-router-dom"
import { Menu,Image, Dropdown, DropdownItem } from "semantic-ui-react"

type Props = {
    setAuth: (value: boolean) => void;
}

export default function SignedInMenu({setAuth}:Props) {
    const navigate = useNavigate();
    function handleSignOut(){
        setAuth(false);
        navigate('/');
    }

  return (
    <div>
      <Menu.Item position='right' style={{margin: 'auto'}}>
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text='Ratko' style={{color: 'black',fontSize: '1.6rem',margin: 'auto'}}>
            <Dropdown.Menu className="">
            <DropdownItem as={Link} to='/home' text='home' icon='plus' />
            <DropdownItem text='My profile' icon='user' style={{}}/>
            <DropdownItem onClick={handleSignOut} text='Sign out' icon='power' />
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
