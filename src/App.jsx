import styled from "styled-components";
import Header from "./components/Header";
import Intro from "./components/Intro";
import GlobalStyles from "./styles/GlobalStyles";
import Location from "./components/Location";
import useViewportObserver from "./hooks/useViewportObserver";
import ProgrammingSkills from "./components/ProgrammingSkills";
import SkillsOverview from "./components/SkillsOverview";
import DatabaseSkills from "./components/DatabaseSkills";

function App() {
  const currentElement = useViewportObserver()
  
  return (
    <div>
      <GlobalStyles />
      <Header section={currentElement !== "end" ? currentElement : "documentation"} />
  
        <Intro/>
        <Location/>
        <SkillsOverview/>
        <ProgrammingSkills/>
        <DatabaseSkills/>

    </div>
  );
}

export default App;
