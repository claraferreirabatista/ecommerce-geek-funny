import { StyledCard } from "../UI";
import products from "../dataBase";
import Items from "../Items/Items";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";

const ProductCard = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <StyledCard>
      {products.map((product, index) => {
        return (
          <Items
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        );
      })}
      <ShoppingCart items={cart} />
    </StyledCard>

  );
};

export default ProductCard;

