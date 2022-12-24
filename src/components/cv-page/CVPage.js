import styled from "styled-components"
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
                
        </CVPageStyle>
    )
}

const CVPageStyle = styled.div`
    background-color: white;

`

export default CVPage