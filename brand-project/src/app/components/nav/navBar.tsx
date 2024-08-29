import { Container, Menu, MenuItem } from "semantic-ui-react";
export default function NavBar(){
    return(
        <Menu inverted={true}>
            <Container className="menu">
            <MenuItem  position="left">
                <img className="logo" src="/logo.png" alt="logo" style={{width: '10rem'}}/>
            </MenuItem>
            <MenuItem>
                <ul className="main-nav-list">
                    <li><a href="#">home</a></li>
                    <li><a href="#">collection</a>
                    <ul className="submenu">
                        <li><a href="#">Мan</a></li>
                        <li><a href="#">Woman</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Unisex</a></li>
                    </ul>
                    </li>
                    <li><a href="#">contact</a></li>
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