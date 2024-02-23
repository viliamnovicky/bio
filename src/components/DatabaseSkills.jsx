import Section from "../ui/Section";
import Skill from "../ui/Skill";
import Skills from "../ui/Skills";

import mongodb from "../../public/svg/mongodb.svg";
import supabase from "../../public/svg/supabase.png";
import firebase from "../../public/svg/firebase.svg";
import Heading from "../ui/Heading";

function DatabaseSkills({currentElement}) {
  return (
    <Section id="Databases" className="observe-me">
      <Heading width="very_small" textAlign="right" margin="right">{"it's all about that data"}</Heading>
      <Heading textTransform="normal">{"<Databases/>"}</Heading>
      <Skills justifyContent = "center">
        <Skill value={currentElement !== "Databases" ? 0 : 35} color="#13aa52" skill={mongodb} name="mongodb"/>
        <Skill value={currentElement !== "Databases" ? 0 : 45} color="#f4bd62" skill={firebase} name="firebase"/>
        <Skill value={currentElement !== "Databases" ? 0 : 55} color="#0fa84f" skill={supabase} name="supabase"/>
      </Skills>
    </Section>
  );
}

export default DatabaseSkills;
