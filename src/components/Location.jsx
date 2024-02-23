import styled from "styled-components";
import Heading from "../ui/Heading";
import home from "../../public/svg/home.svg";
import computer from "../../public/svg/computer.svg";
import Section from "../ui/Section";

const Containers = styled.div`
  padding-top: 10rem;
  max-width: 130rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background: var(--color-grey-200);
  width: 40%;
  justify-content: center;
  align-items: center;
  padding: 5rem 5rem;
  position: relative;
`;

const Info = styled.p`
  text-transform: uppercase;
  color: var(--color-grey-800);
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 2rem;

  &:nth-child(4),
  &:nth-child(5) {
    color: transparent;

    span {
      color: var(--color-grey-800);
    }
  }

  span {
    font-weight: 800;
    text-align: right;
  }
`;

const Icon = styled.img`
  position: absolute;
  background: var(--color-grey-100);
  border-radius: 50%;
  width: 10rem;
  top: -50%;
  transform: translateY(50%);
  border: 1rem solid var(--color-grey-200);
`;

function Location() {
  return (
    <Section>
      <Heading width="small" textAlign="right" margin="right">i am Waiting for your call</Heading>
      <Heading textTransform="normal">
        {"<Location/>"}
      </Heading>
      <Containers id="location" className="observe-me">
        <Container>
          <Icon src={home} />
          <Info>
            Name: <span>Viliam Novický</span>
          </Info>
          <Info>
            Addres: <span>In Kranzbach 1</span>
          </Info>
          <Info>
            .<span>824 93 Klais</span>
          </Info>
          <Info>
            .<span>Germany</span>
          </Info>
        </Container>
        <Container>
          <Icon src={computer} />
          <Info>
            email: <span>viliamnovicky@gmail.com</span>
          </Info>
          <Info>
            tel: <span>01515 411 6093</span>
          </Info>
        </Container>
      </Containers>
    </Section>
  );
}

export default Location;
