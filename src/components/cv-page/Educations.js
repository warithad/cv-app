import styled from "styled-components"
import EducationItem from "./EducationItem"


const Educations =({educations})=>{
    return(
        <EducationsContainer>
            <h1>Education</h1>
            <ul>
                {educations.map(education =>{
                    return <li key={education.id}>
                        <EducationItem
                            educationItem={education}
                        />
                    </li>
                })}
            </ul>
        </EducationsContainer>
    )
}

const EducationsContainer = styled.div`
    font-family: arial;
    padding-left: 3rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`


export default Educations;