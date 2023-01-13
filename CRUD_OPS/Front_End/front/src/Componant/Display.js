import React from 'react';
import { useEffect, useState } from 'react';
import UserServices from './AxiosConnection';
function Display() {
  let [userArr, setUserArr] = useState([]);
  useEffect(() => {
    UserServices.getUser().then((res) => {
      console.log("In user list");
      console.log(res.data);
      setUserArr(res.data);
    }).catch((err) => {
      console.log("err" + err)
    })
  }, []);

  const rendeList = () => {
    return (
      userArr.map((user) => {
        return(<tr> 
          <td>{user.id}</td>    
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          </tr>
        ) 
       })
    )
  }

  return (
    <div>
      <h3>Display</h3>
      <table border="2">
        <thead>
          <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>password</th>
          </tr>
        </thead>
        <tbody>
          {rendeList()}
        </tbody>
      </table>
    </div>
  )
}

export default Display
