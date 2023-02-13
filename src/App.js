import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
     .then(data=>setUsers(data.results))
  },[])
    return(
      <div>
        <p>{users.length}</p>
        {
          users.map((user, index) => <SingleUser key={index} name={user.name} email={user.email} picture={user.picture}></SingleUser>)
        }
      </div>
    )
}

const SingleUser = (props)=> {
  return (
    <div className="component">
      <img src={props.picture.large} alt="" />
      <h2>Name: {props.name.first}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}

export default App;
