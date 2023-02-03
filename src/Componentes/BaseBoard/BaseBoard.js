import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { BoxList, Item, Lista } from "../UI/index"

const BaseBoard=()=> {
  return (
    <footer>
      <BoxList>
      <Lista>
        <Item><FaFacebook /></Item>
        <Item><FaInstagram /></Item>
        <Item><FaWhatsapp /></Item>
     </Lista>
     </BoxList>
    </footer>
  )
}
export default BaseBoard