import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer'
import userContext from './userContext'

function App() {
  // const [userType, setUserType] = useState({
  //   owner: '',
  //   editor: '',
  //   viewer: ''
  // })
  const[loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])

  return (
    <div>
      <userContext.Provider value={{loggedIn,setLoggedIn,user,setUser}}>
        <Header/>
        <Main/>
        <Footer/>
      </userContext.Provider>
    </div>
  )
}

export default App
