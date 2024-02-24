import styled from "styled-components";

const StyledProject = styled.div`
  width: 100%;
  padding: 2rem;
  background: var(--color-grey-200);
  border-radius: 2rem;
`;

const Image = styled.img`
  width: 90%;
  margin-left: 5%;
`;

function Project({ projectImg }) {
  return (
    <StyledProject>
      <Image src={projectImg}></Image>
    </StyledProject>
  );
}

export default Project;
