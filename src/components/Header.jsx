import styled from "styled-components";
import Link from "../ui/Link";
import fb from "../../public/svg/fb.svg"
import ig from "../../public/svg/instagram.svg"
import GitHub from "../../public/svg/github.svg"
import LinkedIn from "../../public/svg/linkedin.svg"

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8rem;
  display: flex;
  background: var(--color-grey-200);
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  z-index: 1000;
`;

const Logo = styled.h1`
  text-transform: uppercase;
  text-align: left;
  color: var(--color-grey-800);

  span {
    font-weight: 200;
  }
`;

const Links = styled.div`
    display: flex;
    gap: 1rem;
` 

function Header({section}) {
  return (
    <StyledHeader>
      <Logo>
        Viliam Novický | <span>{section}</span>
      </Logo>
      <Links>
        <Link href="https://github.com/viliamnovicky" bgImage={GitHub} name="github"/>
        <Link href="https://www.linkedin.com/in/viliam-novick%C3%BD-8167bb12b/" bgImage={LinkedIn} name="linkedIn"/>
        <Link href="https://www.facebook.com/viliam.novicky" bgImage={fb} name="facebook"/>
        <Link href="https://www.facebook.com/viliam.novicky" bgImage={ig} name="instagram"/>
      </Links>
    </StyledHeader>
  );
}

export default Header;
