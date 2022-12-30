import styled from "styled-components"
import Educations from "./Educations"
import Experiences from "./Experiences"
import PageHeader from "./PageHeader"

const CVPage =({cv})=> {
    return (
        <CVPageStyle>
            <PageHeader 
                firstName={cv.personal.firstName} 
                lastName={cv.personal.lastName} 
                email={cv.personal.email} 
                phoneNumber={cv.personal.phoneNumber}
             />
            <Experiences
                experiences={cv.experiences}
            />
            <Educations
                educations={cv.educations}
            />
        </CVPageStyle>
    )
}

const CVPageStyle = styled.div`
    background-color: white;
    min-height: 120vh;
    width: 46rem;
    padding: 3rem 0;
`

export default CVPage