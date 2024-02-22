import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

const StyledSkill = styled.div`
  width: 10vw;
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  width: 5vw;
`;

const Name = styled.p`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-grey-800);
  font-weight: 800;
`

function Skill({skill, color, value, name}) {
    return (
        <StyledSkill>
          <CircularProgressbar value={value}styles={buildStyles({
            trailColor: "var(--color-grey-200)",
            pathColor: color

          })}/>;
          <Icon src={skill} />
          <Name>{name}</Name>
        </StyledSkill>
    )
}

export default Skill
