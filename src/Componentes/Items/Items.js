
import { CardConteiner, InfoCard, ImageCard, NameCard, PriceCard,CardButton } from "../UI"

const Items = ({ name, image, price, onAddToCart }) => {
  return (
    <CardConteiner>
      <ImageCard src={image} />
      <InfoCard>
        <NameCard>{name}</NameCard>
        <PriceCard>Preço: R${price}</PriceCard>
      </InfoCard>
      <CardButton onClick={() => onAddToCart({ name, price })}>Adcionar no carrinho</CardButton>
    </CardConteiner>
  )
}
export default Items
