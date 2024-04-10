import styled, { css } from "styled-components";

const opacity = {
  visible: css`
    opacity: 1;
  `,
  hidden: css`
    opacity: 0.5;

    @media (max-width: 1000px) {
      opacity: 1;
    }
  `,
};

const Section = styled.div`
overflow: hidden;
  height: 100vh;
  padding-top: 8rem;
  max-width: 130rem;
  margin: auto;
  position: relative;
  ${(props) => opacity[props.opacity]};

  @media (max-width: 1350px) {
    width: 96vw;
    margin: auto;
    height: auto;
  }
`;

export default Section;
