import styled from "styled-components"
import ShoppingCart from "../../ShoppingCart/ShoppingCart"


export const Body= styled.div`
  min-height: 81.5vh;

`

const Cart =()=>{
  return(
<Body>
<ShoppingCart/>
</Body>
)
}
export default Cart