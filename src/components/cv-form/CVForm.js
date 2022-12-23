
import PersonsalInfo from './PersonalInfo';
import  styled  from 'styled-components' 
import Education from './Education';
import Experience from './Experience';

const CVForm =({cv, handleChange})=>{

        return (
            <CVFormStyle>
                <PersonsalInfo personal={cv.personal} handleChange={handleChange}/>
                <Education education={cv.education} handleChange={handleChange}/>
                <Experience experience={cv.experience} handleChange={handleChange}/>
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