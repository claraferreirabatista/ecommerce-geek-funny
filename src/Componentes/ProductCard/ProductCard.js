import { StyledCard, StyleBox, StyledSelect } from "./StyleProductCard";
import products from "../../../src/Componentes/DataBase/dataBase";
import CardItems from "../../../src/Componentes/CardItems/CardItems";
import { useContext, useState } from "react";
import { CartContext } from "../../../src/Context/CartContext";
import SearchBar from "../../../src/Componentes/Search/Search"

const ProductCard = () => {
  const { cart, setCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = event => {
    setSortOrder(event.target.value);
  }

  const addToCart = product => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <StyleBox>
        <SearchBar />
        <StyledSelect  value={sortOrder} onChange={handleChange}>
        <option value="asc">Menor preço para maior</option>
        <option value="desc">Maior preço para menor</option>
      </StyledSelect>
      </StyleBox>
      <StyledCard>
        {products
          .sort((a, b) =>
            sortOrder === "asc"
              ? a.price - b.price
              : b.price - a.price
          )
          .map((product) => {
            return (
              <CardItems
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                addToCart={() => addToCart(product)}
              />
            );
          })}
      </StyledCard>
    </>
  );
};

export default ProductCard