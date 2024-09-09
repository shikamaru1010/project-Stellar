import { Button, MenuItem } from "semantic-ui-react"

type Props = {
    setAuth: (value: boolean) => void;
}
export default function SignedOutButtons({setAuth}:Props) {
  return (
    <div>
      <MenuItem>
                <Button   style={{backgroundColor: '#1E90FF',color: 'white'}} content='Login' className="login-btn" onClick={()=> setAuth(true)}/>
                <Button  style={{backgroundColor: '#FF9F1C;',color: 'white'}}  content='Register' className="register-btn" />
        </MenuItem>
    </div>
  )
}
