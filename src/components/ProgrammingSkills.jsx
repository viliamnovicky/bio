import styled from "styled-components";
import Heading from "../ui/Heading";
import html from "../../public/svg/html.svg";
import css from "../../public/svg/css.svg";
import js from "../../public/svg/javascript.svg";
import python from "../../public/svg/python.svg";
import react from "../../public/svg/react.svg";
import Skill from "../ui/Skill";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Skills from "../ui/Skills";
import Section from "../ui/Section";


function ProgrammingSkills() {
  return (
    <Section id="Languages" className="observe-me">
      <Heading textTransform="none">{"<Languages/>"}</Heading>
      <Skills>
        <Skill value={87} color="#F7622C" skill={html} name="html"/>
        <Skill value={90} color="#1172B8" skill={css} name="css"/>
        <Skill value={55} color="#f7df1e" skill={js} name="javascript"/>
        <Skill value={45} color="#327EBD" skill={python} name="python"/>
        <Skill value={65} color="#00d8ff" skill={react} name="react"/>
      </Skills>
    </Section>
  );
}

export default ProgrammingSkills;
