import React from 'react'
//import {Routes,Route} from 'react-router-dom'
//import { AppList } from './Components/Admin/AppList'
//import { AppDetails } from './Components/Admin/AppDetails'
import UserNavbar from './Components/Users/UserNavbar'

/*const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<AppList/>}/>
      <Route path='/:id' element={<AppDetails/>}/>
    </Routes>
    </>
  )
}
export default App*/ 

const App=()=>{
  return(
    <>
    <UserNavbar/>
    </>
  )
}
export default App;