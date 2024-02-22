import Section from "../ui/Section";
import Skill from "../ui/Skill";
import Skills from "../ui/Skills";

import mongodb from "../../public/svg/mongodb.svg";
import supabase from "../../public/svg/supabase.png";
import firebase from "../../public/svg/firebase.svg";
import Heading from "../ui/Heading";

function DatabaseSkills() {
  return (
    <Section id="Databases" className="observe-me">
      <Heading textTransform="normal">{"<Databases/>"}</Heading>
      <Skills>
        <Skill value={35} color="#13aa52" skill={mongodb} name="mongodb"/>
        <Skill value={45} color="#f4bd62" skill={firebase} name="firebase"/>
        <Skill value={55} color="#0fa84f" skill={supabase} name="supabase"/>
      </Skills>
    </Section>
  );
}

export default DatabaseSkills;
