import Logo from "../../assets/logo.png";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="ICTStore" />
    </Container>
  );
}
