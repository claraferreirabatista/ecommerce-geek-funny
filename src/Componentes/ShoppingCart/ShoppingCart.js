const ShoppingCart = ({ items }) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total de itens: {items.length}</td>
          <td>Total: `R$ ${totalPrice.toFixed(2)}`</td>
        </tr>
      </tfoot>
    </table>
  );
};
export default ShoppingCart;
