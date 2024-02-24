import styled from "styled-components";
import Heading from "../ui/Heading";
import html from "../../public/svg/html.svg";
import js from "../../public/svg/javascript.svg";
import python from "../../public/svg/python.svg";
import react from "../../public/svg/react.svg";
import nodejs from "../../public/svg/nodejs.svg";
import Skill from "../ui/Skill";

import "react-circular-progressbar/dist/styles.css";
import Skills from "../ui/Skills";
import Section from "../ui/Section";
import Lines from "../ui/Lines";

function ProgrammingSkills({ currentElement }) {
  return (
    <Section id="Languages" className="observe-me" opacity={currentElement === "Languages" ? "visible" : "hidden"}>
      <Heading margin="left" width="medium" textAlign="left">
        dou you speak javascript?
      </Heading>
      <Heading textTransform="none">{"<Languages/>"}</Heading>
      <Skills justifyContent="center">
        <Skill
          value={currentElement !== "Languages" ? 0 : 87}
          color="#F7622C"
          skill={html}
          name="html"
        />
        <Skill
          value={currentElement !== "Languages" ? 0 : 55}
          color="#f7df1e"
          skill={js}
          name="javascript"
        />
        <Skill
          value={currentElement !== "Languages" ? 0 : 35}
          color="#327EBD"
          skill={python}
          name="python"
        />
      </Skills>
      <Lines/>
      <Skills justifyContent="center">
        <Skill
          value={currentElement !== "Languages" ? 0 : 45}
          color="#3FA92D"
          skill={nodejs}
          name="nodejs"
        />
        <Skill
          value={currentElement !== "Languages" ? 0 : 65}
          color="#00d8ff"
          skill={react}
          name="react"
        />
      </Skills>
    </Section>
  );
}

export default ProgrammingSkills;
