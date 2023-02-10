
import { CardConteiner, InfoCard, ImageCard, NameCard, PriceCard, CardButton } from "./StyleCardItems"

const CardItems = ({ name, image, price, addToCart }) => {
  return (
    <CardConteiner>
      <ImageCard src={image} />
      <InfoCard>
        <NameCard>{name}</NameCard>
        <PriceCard>R${price}</PriceCard>
      </InfoCard>
      <CardButton onClick={addToCart} >Adcionar no carrinho</CardButton>
    </CardConteiner>
  )
}
export default CardItems
