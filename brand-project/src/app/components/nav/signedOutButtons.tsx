import { NavLink } from "react-router-dom";
import { Button, MenuItem } from "semantic-ui-react"

type Props = {
    setAuth: (value: boolean) => void;
}
export default function SignedOutButtons({setAuth}:Props) {
  return (
    <div>
      <MenuItem>
                <Button  as={NavLink} to='/Login' style={{backgroundColor: '#023e8a',color: 'white',marginRight: '1rem'}} content='Login' className="login-btn" onClick={()=> setAuth(true)}/>
                <Button  as={NavLink} to='/Signup' style={{backgroundColor: '#FF9F1C',color: 'white'}}  content='Register' className="register-btn" />
        </MenuItem>
    </div>
  )
}
