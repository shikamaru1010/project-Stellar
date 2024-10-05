import { useEffect, useState } from "react";
import NavBar from "../../components/nav/navBar";
import {User} from "../../types/user"
import "./userInfo.css"


export default function UserInfo() {
  const [data,setData] = useState<User[]>([]);

  useEffect(()=>{
    fetch('http://localhost:8081/users').then(res => res.json()).then(data => setData(data)).catch(err => console.log(err));
  },[])
  return (
    <>
    <NavBar />
    <div className="user-div">
      <img  src='/information.png' style={{width: '64px'}} />
      <h1 style={{color: 'white',marginBottom: '6rem'}}>Client Information</h1>
      <div className="div-section">
        <div className="div-elements">
          <label>ID</label>
          <label>Name</label>
          <label>Password</label>
          <label>Email</label>
        </div>
        <div className="div-elements">
          <table className="user-info-table">

            <tbody>
              {data.map((item,index) =>(
                <tr key={index}>
                  <td>{item.user_id}</td>
                  <td>{item.user_name}</td>
                  <td>{item.password}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      </div>
    </div>
    </>
  )
}
