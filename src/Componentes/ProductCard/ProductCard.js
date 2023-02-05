import { StyledCard } from "./StyleProductCard";
import products from "../dataBase";
import CardItems from "../CardItems/CardItems";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductCard = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = product => {
    const existingProduct = cart.find(p => p.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map(p =>
          p.name === product.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <StyledCard>
      {products.map((product) => {
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
  );
};

export default ProductCard;
