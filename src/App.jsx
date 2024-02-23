import Header from "./components/Header";
import Intro from "./components/Intro";
import GlobalStyles from "./styles/GlobalStyles";
import Location from "./components/Location";
import useViewportObserver from "./hooks/useViewportObserver";
import ProgrammingSkills from "./components/ProgrammingSkills";
import SkillsOverview from "./components/SkillsOverview";
import DatabaseSkills from "./components/DatabaseSkills";
import DesignSkills from "./components/DesignSkills";
import Projects from "./components/Projects";

function App() {
  const currentElement = useViewportObserver()
  
  return (
    <div>
      <GlobalStyles />
      <Header section={currentElement !== "end" ? currentElement : "documentation"} />
  
        <Intro/>
        <SkillsOverview/>
        <ProgrammingSkills currentElement={currentElement}/>
        <DatabaseSkills currentElement={currentElement}/>
        <DesignSkills currentElement={currentElement}/>
        <Projects/>
        <Location/>

    </div>
  );
}

export default App;
