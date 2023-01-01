import styled from "styled-components"


const ExperienceItem =({experienceItem})=>{
    return (
        <ExperienceItemWrapper>
            <p>Position: {experienceItem.position}</p>
            <p>Company: {experienceItem.company}</p>
            <p>City: {experienceItem.city}</p>
            <p>From:{experienceItem.from} - To{experienceItem.to}</p>
        </ExperienceItemWrapper>
    )
}

const ExperienceItemWrapper = styled.div`
`
export default ExperienceItem;


