import { StyledCard, StyleBox, StyledSelect, HomeButton } from "./StyleProductCard";
import products from "../../../src/Componentes/DataBase/dataBase";
import CardItems from "../../../src/Componentes/CardItems/CardItems";
import { useContext, useState } from "react";
import { CartContext } from "../../../src/Context/CartContext";
import SearchBar from "../../../src/Componentes/Search/Search"
import { Link } from "react-router-dom"
import styled from "styled-components";
import Filters from "../Filter/Filter";

export const StyledLink = styled(Link)`
color: #F1F1F1`

const ProductCard = () => {
  const { cart, setCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState('');
  const lowerSearch = searchQuery.toLowerCase()
  const [lowestPrice, setLowestPrice] = useState(0);
  const [biggestPrice, setBiggestPrice] = useState(200);


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
        <SearchBar searchQuery={searchQuery} setSearchQuery={(event) =>
          setSearchQuery(event.target.value)} />
        <StyledSelect value={sortOrder} onChange={handleChange}>
          <option value="asc">Preço crescente</option>
          <option value="desc">Preço decrescente</option>
        </StyledSelect>
      </StyleBox>
      <StyledCard>
        <Filters
          lowestPrice={lowestPrice}
          setLowestPrice={setLowestPrice}
          biggestPrice={biggestPrice}
          setBiggestPrice={setBiggestPrice} />
        {products
          .sort((a, b) =>
            sortOrder === "asc"
              ? a.price - b.price
              : b.price - a.price
          )
          .filter((p) => p.price <= biggestPrice && p.price >= lowestPrice)
          .filter((p) => p.name.toLowerCase().includes(lowerSearch))
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
      <HomeButton><StyledLink to="/Cart">Ir para carrinho</StyledLink></HomeButton>
    </>
  );
};

export default ProductCard