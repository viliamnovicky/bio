import styled, { css } from "styled-components";

const opacity = {
  visible: css`
    opacity: 1;
  `,
  hidden: css`
    opacity: 0.5;
  `,
};

const Section = styled.div`
  padding-top: 15rem;
  max-width: 130rem;
  margin: auto;
  position: relative;
  ${(props) => opacity[props.opacity]};
`;



export default Section;
