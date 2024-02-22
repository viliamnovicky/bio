import styled from "styled-components";
import portrait from "../../public/img/portret.png";
import Heading from "../ui/Heading";

const StyledIntro = styled.div`
  max-width: 130rem;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid var(--color-grey-300) */
`;


const Portrait = styled.img`
  padding-top: 20rem;
`;

function Intro() {
  return (
    <StyledIntro id="introduction" className="observe-me">
      <Heading textAlign="left">the right piece of hardware for your company</Heading>
      <Portrait src={portrait} />
    </StyledIntro>
  );
}

export default Intro;
