import SectionStyle from "./style/SectionStyle";
import Input from "./Input";
import DeleteButton from "./utils/DeleteButton";

const Education =({
     education,
     handleChangeEducation,
     handleDeleteEducation,
     id
    })=>{
    
    return (
        <SectionStyle>
            <Input
                name = 'university'
                placeHolder = 'University Name'
                type= 'text'
                value={education.university}
                handleChange={e => handleChangeEducation(e, id)}
            />

            <Input  
                name = 'city'
                placeHolder = 'City'
                type= 'text'
                value={education.city}
                handleChange={e => handleChangeEducation(e, id)}
            />

            <Input
                name = 'degree'
                placeHolder = 'Degree'
                type= 'text'
                value={education.degree}
                handleChange={e => handleChangeEducation(e, id)}
            />

            <Input
                name = 'from'
                placeHolder = 'From'
                type= 'number'
                value={education.from}
                handleChange={e => handleChangeEducation(e, id)}
            />

            <Input
                name = 'to'
                placeHolder = 'To'
                type= 'number'
                value={education.to}
                handleChange={e => handleChangeEducation(e, id)}
            />

            <DeleteButton onclickDeleteButton={() =>handleDeleteEducation(id)}/>
        </SectionStyle>
    )
}

export default Education;