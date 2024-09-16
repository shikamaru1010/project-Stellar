import NavBar from "../../components/nav/navBar";
import {User} from "../../types/user"
import "./userInfo.css"

interface UserProps{
  user: User;
}
export default function UserInfo({user}:UserProps) {
  return (
    <>
    <NavBar />
    <div className="user-div">
      <img  src='/user.png' style={{width: '32px'}} />
      <h1 style={{color: 'white'}}>User Information</h1>
      <div>
        <div className="div-elements">
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.email}</p>        
        <p>{user.adress.street},{user.adress.city}, {user.adress.country}</p>
        </div>
        
      </div>
    </div>
    </>
  )
}
