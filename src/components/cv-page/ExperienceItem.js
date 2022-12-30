import styled from "styled-components"


const ExperienceItem =({experienceItem})=>{
    <ExperienceItemWrapper>
        <p>Position: {experienceItem.position}</p>
        <p>Company: {experienceItem.company}</p>
        <p>City: {experienceItem.city}</p>
        <p>From:{experienceItem.from} - To{experienceItem.to}</p>
    </ExperienceItemWrapper>
}

const ExperienceItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

`
export default ExperienceItem;


