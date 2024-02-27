import styled, { css } from "styled-components";

const justifyContent = {
  center: css`
  justify-content: center;
  `,
  between: css`
  justify-content: space-between;
  `,
  evenly: css`
  justify-content: space-evenly;
  `,
}

const Skills = styled.div`
  padding-top: 5rem;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
  ${(props) => justifyContent[props.justifyContent]}

  @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
  };
`;

Skills.defaultProps = {
  justifyContent: "between"
}

export default Skills