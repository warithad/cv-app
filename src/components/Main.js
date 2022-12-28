import React, { useState } from "react"
import styled from "styled-components";
import CVForm from "./cv-form/CVForm"
import CVPage from "./cv-page/CVPage"

const defaultCv = {
       personal: {
            firstName: '', 
            lastName: '',
            title: '',
            email: '',
            phoneNumber: '',
            address: '',
            desc: ''
        },
        experiences: [
            {
                id: '',
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }
        ],
        educations: [
            {
                id: '',
                university: '',
                city: '',
                degree: '',
                from: '',
                to: ''
            }
        ]
};

const Main =()=>{

    const [ cv, setCv ]  = useState(defaultCv);
        
    const handleChangePersonal =(e)=>{
        const {name, value} = e.target

        setCv((prevState) =>({
            ...prevState, 
            personal: {
                ...prevState.personal,
                [name]: value
            }
        }))
    }

    const handleAddEducation =()=>{

    }
    const handleDeleteEducation =()=>{
        
    }
    const handleChangeEducation =()=>{
        
    }
    const handleAddExperience =()=>{
        
    }
    const handleDeleteExperience =()=>{
        
    }
    const handleChangeExperience =()=>{
        
    }
    const handleReset =()=>{
        setCv(defaultCv);    
    }
    
    return (
        <MainStyle>
            <CVForm 
                cv={cv}
                handleChangePersonal={handleChangePersonal}
                handleAddExperience={handleAddExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleChangeExperience={handleChangeExperience}
                handleAddEducation={handleAddEducation}
                handleDeleteEducation={handleDeleteEducation}
                handleChangeEducation={handleChangeEducation}
                handleReset={handleReset}
            />
            <CVPage cv={cv}/>
        </MainStyle>
    );
}


const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    justify-content: center;
`

export default Main;