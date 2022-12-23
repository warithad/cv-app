import SectionStyle from "./style/SectionStyle";
import Input from "./Input";

const Education =(education, handleChange)=>{
    
    return (
        <SectionStyle>
            <h1>Education</h1>
            
            <Input
                name = 'universityName'
                placeHolder = 'University Name'
                type= 'text'
                value={education.university}
                handleChange={e => handleChange(e)}
            />

            <Input  
                name = 'state'
                placeHolder = 'State'
                type= 'text'
                value={education.state}
                handleChange={e => handleChange(e)}
            />

            <Input
                name = 'degree'
                placeHolder = 'Degree'
                type= 'text'
                value={education.degree}
                handleChange={e => handleChange(e)}
            />

            <Input
                name = 'from'
                placeHolder = 'From'
                type= 'number'
                value={education.from}
                handleChange={e => handleChange(e)}
            />

            <Input
                name = 'to'
                placeHolder = 'To'
                type= 'number'
                value={education.to}
                handleChange={e => handleChange(e)}
            />
        </SectionStyle>
    )
}

export default Education;