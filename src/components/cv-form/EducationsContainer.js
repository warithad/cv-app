import Education from "./Education";
import ContainerStyle from "./style/ContainerStyle";
import AddButton from "./utils/AddButton"

const EducationsContainer =({
    educations,
    handleAddEducation,
    handleChangeEducation,
    handleDeleteEducation
})=>{
    const educationItems = educations.map(
        education => (
            <Education 
                education={education}
                key={education.id}
                id={education.id}
                handleChangeEducation={handleChangeEducation}
                handleDeleteEducation={handleDeleteEducation}
            />       
        )
    )
    return (
        <ContainerStyle>
            <h1>Education</h1>
            {educationItems}
            <AddButton title='Add' onClickAddButton={e => handleAddEducation(e)}/>
        </ContainerStyle>
    )
}

export default EducationsContainer;