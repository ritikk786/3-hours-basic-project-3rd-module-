import React, { useState, Fragment } from 'react';
import AddUser from './Component/User/AddUser';
import UserList from './Component/User/UserList';


function App() {
  const [userList, setUserList] = useState([])

  const Adduser =(uName, uAge, uCollage)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{ name:uName , age:uAge , collage:uCollage,  id:Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      <AddUser onAdduser={Adduser}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
