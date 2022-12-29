
import PersonsalInfo from './PersonalInfo';
import  styled  from 'styled-components' 
import ExperiencesContainer from './ExperiencesContainer';
import EducationsContainer from './EducationsContainer';

const CVForm =({
    cv,
    handleChangePersonal,
    handleAddExperience,
    handleChangeExperience,
    handleDeleteExperience,
    handleAddEducation,
    handleChangeEducation,
    handleDeleteEducation,
    handleReset
})=>{

        return (
            <CVFormStyle>
                <PersonsalInfo 
                    personal={cv.personal}
                    handleChange={handleChangePersonal}
                />
                <ExperiencesContainer
                    experiences={cv.experiences}
                    handleAddExperience={handleAddExperience}
                    handleChangeExperience={handleChangeExperience}
                    handleDeleteExperience={handleDeleteExperience}
                />
                <EducationsContainer
                    educations={cv.educations}
                    handleAddEducation={handleAddEducation}
                    handleChangeEducation={handleChangeEducation}
                    handleDeleteEducation={handleDeleteEducation}
                />
            </CVFormStyle>
        )
}


const CVFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 40rem;
    background-color: #d4d4d4;
    padding: 3rem;
    gap: 2rem;
`

export default CVForm;