
import PersonsalInfo from './PersonalInfo';
import  styled  from 'styled-components' 

const CVForm =({cv, handleChange})=>{

        return (
            <CVFormStyle>
                <PersonsalInfo personal={cv.personal} handleChange={handleChange}/>
            </CVFormStyle>
        )
}


const CVFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 40rem;
    background-color: #d4d4d4;
    padding: 3rem;
`

export default CVForm;