import styled from "styled-components"
import EducationItem from "./EducationItem"


const Educations =({educations})=>{
    <EducationsContainer>
        <h1>Education</h1>
        <ul>
            {educations.map(education =>{
                return <li>
                    <EducationItem
                        educationItem={education}
                    />
                </li>
            })}
        </ul>
    </EducationsContainer>
}

const EducationsContainer = styled.div`

`


export default Educations;