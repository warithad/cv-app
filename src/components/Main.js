import React, { useState } from "react"
import styled from "styled-components";
import CVForm from "./cv-form/CVForm"
import CVPage from "./cv-page/CVPage"
import uniqid from "uniqid"

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
                id: uniqid(),
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
            }
        ],
        educations: [
            {
                id: uniqid(),
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
        setCv((prevState) =>({
            ...prevState,
            educations: [
                ...prevState.educations,
                {
                    id: uniqid(),
                    university: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                }
            ]
        }));
    }

    const handleDeleteEducation =(id)=>{
        setCv((prevState) =>{
            const edu = prevState.educations.filter(
                education => education.id !== id
            )
            return {
                ...prevState,
                educations : [...edu] 
            }
        })
    }

    const handleChangeEducation =(e, id)=>{
        const {name, value} = e.target;

        setCv((prevState) =>{
            const edu = prevState.educations.map(
                education => {
                    if(education.id === id) {
                        return {...education, [name]: value}
                    }
                    return education;
                }
            )
            return {...prevState,educations: [...edu]}
        })  
    }

    const handleAddExperience =()=>{
        setCv((prevState) =>({
            ...prevState,
            experiences : [
                ...prevState.experiences,
                    {
                        id: uniqid(),
                        position: '',
                        company: '',
                        city: '',
                        from: '',
                        to: ''
                    }
            ]
        }));   
    }

    const handleDeleteExperience =(id)=>{
        setCv((prevState) =>{
            const exp = prevState.experiences.filter(
                experience => experience.id !== id
            )
            return {...prevState,
                    experiences : [...exp]
                   }
        })
    }

    const handleChangeExperience =(e, id)=>{
        const {name, value} = e.target;

        setCv((prevState) =>{
            const exp = prevState.experiences.map(
                experience =>{
                    if(experience.id === id){
                        return {...experience, [name]: value}
                    }
                    return experience;
                }
            )
            return {...prevState, experiences : [...exp]}
        })
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