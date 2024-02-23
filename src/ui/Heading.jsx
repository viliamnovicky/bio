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
  `,
  right: css`
    margin-right: 0;
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
  //width: 70rem;
  background: -webkit-linear-gradient(180deg, #a9c9ff, #ffbbec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${(props) => textTransform[props.textTransform]}
  ${(props) => textAlign[props.textAlign]}
  ${(props) => width[props.width]}
  ${(props) => margin[props.margin]}
`;

Heading.defaultProps = {
  textTransform: "upper",
  textAlign: "center",
};

export default Heading;
