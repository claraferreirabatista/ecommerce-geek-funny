import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import BaseBoard from "./Componentes/BaseBoard/BaseBoard"
import Cart from "./Componentes/Pages/Cart/Cart"
import Home from "./Componentes/Pages/Home/Home"
import CartContextProvider from "./Context/CartContext"


const NavRoutes = ()=>{
return (
<Router>
<NavBar />
<CartContextProvider>
<Routes>
  <Route exact path="/" element={<Home />} > </Route>
  <Route path="/Cart" element={<Cart />} > </Route>
</Routes>
</CartContextProvider>
<BaseBoard/>
</Router>
)}
export default NavRoutes