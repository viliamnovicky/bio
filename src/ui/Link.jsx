import styled from "styled-components";

const StyledLink = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: var(--color-grey-50);
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: var(--color-grey-900);
    width: 15rem;

    img {
      filter: invert(100%);
    }

    p {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 1000px) {
    width: 2rem;
    height: 2rem;
    &:hover {
      background: var(--color-grey-50);
      width: 2rem;

      img {
        filter: none;
      }

      p {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

const Paragraph = styled.p`
  display: inline;
  color: var(--color-grey-50);
  align-self: center;
  justify-self: right;
  font-size: 1.6rem;
  text-transform: uppercase;
  padding-right: 1rem;
  opacity: 0;
  visibility: hidden;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 1000px) {
    width: 2rem;
  height: 2rem;
  }
`;

function Link({ href, bgImage, name }) {
  return (
    <StyledLink href={href} target="_blank">
      <Image src={bgImage} />
      <Paragraph>{name}</Paragraph>
    </StyledLink>
  );
}

export default Link;
