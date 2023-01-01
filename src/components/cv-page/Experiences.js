import styled from "styled-components"
import ExperienceItem from "./ExperienceItem"


const Experiences =({
    experiences
})=>{
    return (
        <ExperiencesContainer>
            <h1>Experience</h1>
            <ul>
                {experiences.map(experience =>{
                    return (<li key={experience.id}>
                        <ExperienceItem
                            experienceItem={experience}
                        />
                    </li>)
                })}
            </ul>
        </ExperiencesContainer>
    )
}

const ExperiencesContainer = styled.div`
    font-family: arial;
    padding-left: 3rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export default Experiences;