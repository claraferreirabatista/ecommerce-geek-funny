import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FooterConteiner,  Icons, TextFooter } from "./StyleBaseBoard"


const BaseBoard = () => {
  return (
    <FooterConteiner>
      <Icons>
        <Link
          to="https://github.com/claraferreirabatista"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub size={32} color="#F1F1F1 " />
        </Link>

        <Link
          to="https://www.linkedin.com/in/clara-ferreira-batista/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={32} color="#0A66C2" />
        </Link>
      </Icons>
      <TextFooter> Desenvolvido por Clara Ferreira </TextFooter>
    </FooterConteiner>
  )
}
export default BaseBoard