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
        return <tr><th>{user.FirstName}</th></tr>
      })
    )
  }

  return (
    <div>
      <h3>Display</h3>
      <table>
        <thead>
          <tr><th>First Name</th></tr>
        </thead>
        <tbody>
          {rendeList()};
        </tbody>
      </table>
    </div>
  )
}

export default Display
