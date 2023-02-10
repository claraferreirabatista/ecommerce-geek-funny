import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import React from "react";
import { TableContainer, Table, THead, TBody, TFoot, TH, TD, Total } from "./StyledShoppingCart";

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let totalPrice = 0;
  let totalItem = 0;

  return (
    <TableContainer>
    <Table>
      <THead>
        <tr>
          <TH>Nome</TH>
          <TH>Preço</TH>
          <TH>Quantidade</TH>
          <TH>Ações</TH>
        </tr>
      </THead>
      <TBody>
        {cart.map((item, index) => {
          totalPrice += item.price * item.quantity;
          totalItem += item.quantity;
          return (
            <tr key={index}>
              <TD>{item.name}</TD>
              <TD>{item.price}</TD>
              <TD>{item.quantity}</TD>
              <TD>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
              </TD>
            </tr>
          );
        })}
      </TBody>
      <TFoot>
        <tr>
          <TD>Total de itens:{totalItem*cart}</TD>
          <Total>Total: R$ {totalPrice.toFixed(2)}</Total>
        </tr>
      </TFoot>
    </Table>
  </TableContainer>
);
};
export default ShoppingCart;
