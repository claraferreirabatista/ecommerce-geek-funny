import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import BaseBoard from "./Componentes/BaseBoard/BaseBoard"
import Cart from "./Componentes/Pages/Cart/Cart"
import Home from "./Componentes/Pages/Home/Home"


const NavRoutes = ()=>{
return (
<Router>
<NavBar />
<Routes>
  <Route exact path="/" element={<Home />} > </Route>
  <Route path="/Cart" element={<Cart />} > </Route>
</Routes>
<BaseBoard/>

</Router>
)}
export default NavRoutes