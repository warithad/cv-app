import Input from "./Input";
import SectionStyle from "./style/SectionStyle";

const Experience =(experience, handleChange, onDelete)=>{
   
    return (
        <SectionStyle>
            <h1>Experience</h1>

            <Input
                name='position'
                placeHolder='Position'
                type='text'
                value={experience.position}
                handleChange={handleChange}
            />
            <Input
                name='company'
                placeHolder='Company'
                type='text'
                value={experience.company}
                handleChange={handleChange}
            />
            <Input
                name='city'
                placeHolder='City'
                type='text'
                value={experience.city}
                handleChange={handleChange}
            />
            <Input
                name='from'
                placeHolder='From'
                type='number'
                value={experience.from}
                handleChange={handleChange}
            />
            <Input
                name='to'
                placeHolder='To'
                type='number'
                value={experience.to}
                handleChange={handleChange}
            />
        </SectionStyle>
   )
}

export default Experience;