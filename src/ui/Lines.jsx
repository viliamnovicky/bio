import styled from "styled-components";

const StyledLines = styled.div`
  width: 10rem;
  height: 10rem;
  margin: auto;
  margin-top: 5rem;
  position: relative;
`;

const Left = styled.div`
  width: 0.7rem;
  height: 15rem;
  transform: rotate(-30deg);
  position: absolute;
  left: 100%;
  bottom: -2.5rem;
  background: var(--color-grey-800);
  border-radius: 50rem;
`;

const Right = styled.div`
  width: 0.7rem;
  height: 15rem;
  transform: rotate(30deg);
  position: absolute;
  right: 100%;
  bottom: -2.5rem;
  background: var(--color-grey-800);
  border-radius: 50rem;
`;

function Lines() {
  return (
    <StyledLines>
      <Left />
      <Right />
    </StyledLines>
  );
}

export default Lines;
