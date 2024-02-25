import styled from "styled-components"
import Heading from "../ui/Heading"
import Project from "../ui/Project"
import Section from "../ui/Section"
import matus from "../../public/img/matus.jpg"
import viliamnovicky from "../../public/img/viliamnovicky.jpg"

const StyledProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 130rem;
    gap: 2rem;
`

function Projects({currentElement}) {
    return (
        <Section id ="Projects" className="observe-me" opacity={currentElement === "Projects" ? "visible" : "hidden"}>
            <Heading margin="left" textAlign="left" width="very_small" >{"Let's build together"}</Heading>
            <Heading textTransform="normal">{"<Projects/>"}</Heading>
            <StyledProjects>
                <Project projectImg={matus}/>
                <Project projectImg={viliamnovicky}/>
            </StyledProjects>
        </Section>
    )
}

export default Projects
