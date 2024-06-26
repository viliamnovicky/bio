import styled, { css } from "styled-components";

const textTransform = {
  upper: css`
    text-transform: uppercase;
  `,

  lower: css`
    text-transform: lowercase;
  `,

  normal: css`
    text-transform: none;
  `,
};

const textAlign = {
  left: css`
    text-align: left;
  `,
  right: css`
    text-align: right;
  `,
  center: css`
    text-align: center;
  `,
};

const margin = {
  left: css`
    margin-left: 0;

    @media (max-width: 1350px) {
      margin-left: 2rem;
  };

  @media (max-width: 1000px) {
      margin: auto;
      text-align: center;
  }
  `,
  right: css`
    margin-right: 0;

    @media (max-width: 1350px) {
      margin-right: 2rem;
  };
  @media (max-width: 1000px) {
      margin: auto;
      text-align: center;
  }
  `,
  center: css`
    margin: auto;
  `,
};

const width = {
  very_small: css`
    width: 40%;
  `,
  small: css`
    width: 60%;
  `,
  medium: css`
    width: 80%;
  `,
  large: css`
    width: 100%;
  `,
};

const Heading = styled.h1`
  margin: auto;
  font-size: 8rem;
  font-weight: 800;
  padding-bottom: 5rem;
  //width: 70rem;
  background: -webkit-linear-gradient(180deg, #a9c9ff, #ffbbec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${(props) => textTransform[props.textTransform]}
  ${(props) => textAlign[props.textAlign]}
  ${(props) => width[props.width]}
  ${(props) => margin[props.margin]}

  @media (max-width: 1350px) {
    font-size: 6rem;
  }

  @media (max-width: 1000px) {
    font-size: 4rem;
    text-align: center;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

Heading.defaultProps = {
  textTransform: "upper",
  textAlign: "center",
};

export default Heading;
