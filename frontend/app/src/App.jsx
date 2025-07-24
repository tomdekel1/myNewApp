import './App.css'
import Header from './components/header'
import About from './components/pages/About'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/pages/signIn'
import SignUp from './components/pages/signUp'
import ProfileSettings from './components/pages/ProfileSettings'
import Products from './components/pages/Products'
import OrderGas from './components/pages/OrderGas'
import OrdersCenter from './components/pages/OrdersCenter'
import MyOrders from './components/pages/MyOrders'
import ProductPage from './components/pages/ProductPage'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/gasCans" element={<OrderGas />} />
        <Route path="/ordersCenter" element={<OrdersCenter />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order-product" element={<ProductPage />} />
      </Routes>
    </div>

  )
}

export default App
