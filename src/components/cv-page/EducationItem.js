import styled from "styled-components"

const EducationItem =({educationItem})=>{
    return (
        <EducationItemWrapper>
            <p>University: {educationItem.university}</p>
            <p>City: {educationItem.city}</p>
            <p>Degree: {educationItem.degree}</p>
            <p>From:{educationItem.from} - To:{educationItem.to}</p>
        </EducationItemWrapper>
    )

}

const EducationItemWrapper = styled.div`

`

export default EducationItem;