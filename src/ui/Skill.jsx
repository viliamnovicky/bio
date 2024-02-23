import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import styled from "styled-components";

const StyledSkill = styled.div`
  width: 10vw;
  position: relative;
`;

const Icon = styled.img`
  width: 50%;
`;

const Name = styled.p`
  font-size: 3rem;
  padding-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-grey-800);
  font-weight: 800;
`;

function Skill({ skill, color, value, name }) {
  return (
    <StyledSkill>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          trailColor: "var(--color-grey-200)",
          pathColor: color,
          pathTransitionDuration: 1,
        })}
      >
        <Icon src={skill} />
      </CircularProgressbarWithChildren>
      <Name>{name}</Name>
    </StyledSkill>
  );
}

export default Skill;
