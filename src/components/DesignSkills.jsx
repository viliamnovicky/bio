import Section from "../ui/Section";
import Skill from "../ui/Skill";
import Skills from "../ui/Skills";
import Heading from "../ui/Heading";
import Lines from "../ui/Lines";
import css from "../../public/svg/css.svg";
import figma from "../../public/svg/figma.svg";
import ps from "../../public/svg/ps.webp";
import sass from "../../public/svg/sass.svg";
import less from "../../public/svg/less.svg";
import tailwind from "../../public/svg/tailwind.svg";
import styledComponent from "../../public/svg/styled-component.png";

function DesignSkills({ currentElement }) {
  return (
    <Section id="Design" className="observe-me">
      <Heading margin="left" width="small" textAlign="left">
        Bringing colors to your code
      </Heading>
      <Heading textTransform="normal">{"<Design/>"}</Heading>
      <Skills justifyContent="center">
      <Skill
          value={currentElement !== "Design" ? 0 : 75}
          color="#44a8b3"
          skill={tailwind}
          name="tailwind"
        />
      <Skill
          value={currentElement !== "Design" ? 0 : 85}
          color="#001E36"
          skill={ps}
          name="photoshop"
        />
        <Skill
          value={currentElement !== "Design" ? 0 : 85}
          color="#1172B8"
          skill={css}
          name="css"
        />
        <Skill
          value={currentElement !== "Design" ? 0 : 30}
          color="#A259FF"
          skill={figma}
          name="figma"
        />
        <Skill
          value={currentElement !== "Design" ? 0 : 90}
          color="#db7fb7"
          skill={styledComponent}
          name="Styled components"
        />
      </Skills>
      <Lines/>
      <Skills justifyContent="center">
      <Skill
          value={currentElement !== "Design" ? 0 : 90}
          color="#CC6699"
          skill={sass}
          name="sass"
        />
        <Skill
          value={currentElement !== "Design" ? 0 : 90}
          color="#2E4F82"
          skill={less}
          name="less"
        />
        
      </Skills>
    </Section>
  );
}

export default DesignSkills;
