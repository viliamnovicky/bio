import styled, { css } from "styled-components";
import portrait from "../../public/img/portret.png";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const opacity = {
  visible: css`
    opacity: 1;
  `,
  hidden: css`
    opacity: 0;
  `,
};

const StyledIntro = styled.div`
  max-width: 130rem;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => opacity[props.opacity]};
`;

const Portrait = styled.img`
  padding-top: 20rem;
`;

function Intro({ currentElement }) {
  return (
    <Section>
      <StyledIntro
        id="introduction"
        className="observe-me"
        opacity={currentElement === "introduction" ? "visible" : "hidden"}
      >
        <Heading textAlign="left" margin="left">
          the right piece of hardware for your company
        </Heading>
        <Portrait src={portrait} />
      </StyledIntro>
    </Section>
  );
}

export default Intro;
