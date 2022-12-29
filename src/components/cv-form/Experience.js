
import Input from "./Input";
import SectionStyle from "./style/SectionStyle";
import DeleteButton from "./utils/DeleteButton";

const Experience =({
                    experience, 
                    handleChangeExperience, 
                    handleDeleteExperience, 
                    id}
                    )=>{
   
    return (
        <SectionStyle>
            <Input
                name='position'
                placeHolder='Position'
                type='text'
                value={experience.position}
                handleChange={e => handleChangeExperience(e, id)}
            />
            <Input
                name='company'
                placeHolder='Company'
                type='text'
                value={experience.company}
                handleChange={e => handleChangeExperience(e, id)}
            />
            <Input
                name='city'
                placeHolder='City'
                type='text'
                value={experience.city}
                handleChange={e => handleChangeExperience(e, id)}
            />
            <Input
                name='from'
                placeHolder='From'
                type='number'
                value={experience.from}
                handleChange={e => handleChangeExperience(e, id)}
            />
            <Input
                name='to'
                placeHolder='To'
                type='number'
                value={experience.to}
                handleChange={e => handleChangeExperience(e, id)}
            />
            <DeleteButton onclickDeleteButton={()=>handleDeleteExperience(id)}/>
        </SectionStyle>
   )
}

export default Experience;