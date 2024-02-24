import Heading from "../ui/Heading"
import Section from "../ui/Section"

function SkillsOverview({currentElement}) {
    return (
        <Section id="My Skills" className="observe-me" opacity={currentElement === "My Skills" ? "visible" : "hidden"}>
            <Heading textAlign="right" width="small" margin="right">useful knowledge that I can bring</Heading>
            <Heading textAlign="left" width="small" margin="left">useful knowledge that I can bring</Heading>
        </Section>
    )
}

export default SkillsOverview
