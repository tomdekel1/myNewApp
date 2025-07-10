import './App.css'
import Header from './components/header'
import About from './components/pages/About'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import ProfileSettings from './components/pages/ProfileSettings'
import Feed from './components/pages/Feed'
import OrderGas from './components/pages/OrderGas'
import OrdersCenter from './components/pages/OrdersCenter'
import MyOrders from './components/pages/MyOrders'

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
          <Route path="/gasCans" element={<OrderGas />} />
          <Route path="/ordersCenter" element={<OrdersCenter />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
