import { Link, NavLink } from "react-router-dom";
import { Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButtons from "./signedOutButtons";
import SignedInMenu from "./signedInMenu";
import { useState } from "react";
export default function NavBar(){
    const [auth,setAuth] = useState(false);

    return(
        <Menu inverted={true}>
            <Container className="menu">
            <MenuItem  position="left" as={NavLink} to='/'>
                <img className="logo" src="/logo.png" alt="logo" style={{width: '10rem'}}/>
            </MenuItem>
            <MenuItem >
                <ul className="main-nav-list">
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/collection">collection</Link>
                    <ul className="submenu">
                        <li><a href="#">Мan</a></li>
                        <li><a href="#">Woman</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Unisex</a></li>
                    </ul>
                    </li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>

            </MenuItem>
            <MenuItem position="right">
                {auth ? <SignedInMenu setAuth={setAuth}/> : <SignedOutButtons setAuth={setAuth}/>}
            </MenuItem>
            </Container>
        </Menu>
    )
}