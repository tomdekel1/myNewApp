import './App.css'
import Header from './components/header'
import About from './components/pages/About'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import ProfileSettings from './components/pages/ProfileSettings'
import Feed from './components/pages/Feed'

function App() {

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
