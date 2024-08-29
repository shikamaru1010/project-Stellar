import {User} from "../../types/user"

interface UserProps{
  user: User;
}
export default function userInfo({user}:UserProps) {
  return (
    <>
      <img  src='/user.png'/>
      <h1>User Information</h1>
      <div>
        <label>User first and last name:</label>
        <label> {user.firstName} {user.lastName}</label>
        <label>User gmail:</label>
        <label>{user.email}</label>
        <label>User adress:</label>
        <label>{user.adress.street}{user.adress.city} {user.adress.country}</label>
        
      </div>
    </>
  )
}
