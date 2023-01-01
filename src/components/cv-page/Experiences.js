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

`

export default Experiences;