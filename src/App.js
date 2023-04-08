import React, { useState } from 'react';
import AddUser from './Component/User/AddUser';
import UserList from './Component/User/UserList';


function App() {
  const [userList, setUserList] = useState([])

  const Adduser =(uName, uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{ name:uName , age:uAge , id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAdduser={Adduser}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
