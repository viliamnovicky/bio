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
import Footer from "./components/Footer";

function App() {
  const currentElement = useViewportObserver()
  
  return (
    <div>
      <GlobalStyles />
      <Header section={currentElement !== "end" ? currentElement : "documentation"} />
  
        <Intro currentElement={currentElement}/>
        <SkillsOverview currentElement={currentElement}/>
        <ProgrammingSkills currentElement={currentElement}/>
        <DatabaseSkills currentElement={currentElement}/>
        <DesignSkills currentElement={currentElement}/>
        <Projects currentElement={currentElement}/>
        <Location currentElement={currentElement}/>
        <Footer/>
    </div>
  );
}

export default App;
