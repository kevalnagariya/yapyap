import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logout from './home/left1/Logout'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { useAuth } from "./context/AuthProvider";


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (

    // <div className='flex h-screen'>
    //   <Logout></Logout>
    //   <Left></Left>
    //   <Right></Right>

     
    // </div>

      // <SignUp></SignUp> 
       <Login></Login> 
  )
}

export default App