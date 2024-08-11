import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
export default function NavBar(){
    return(
        <Menu inverted={true}>
            <Container className="menu">
            <MenuItem  position="left">
                <img className="logo" src="/logo.png" alt="logo" style={{width: '10rem'}}/>
            </MenuItem>
            <MenuItem>
                <ul className="main-nav-list">
                    <li>
                    <Button>
                        <a className="links-nav"href="/home">Home</a>
                    </Button>
                    </li>
                    <li>
                        <Button>
                            <a className="links-nav">Collection</a>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <a className="links-nav">Contact</a>
                        </Button>                
                    </li>
                </ul>
            </MenuItem>
            <MenuItem position="right">
                <ul className="linkovi">
                    <li className="linkovi-Login">LogIn</li>
                    <li>Signup</li>
                </ul>
            </MenuItem>
            </Container>
        </Menu>
    )
}