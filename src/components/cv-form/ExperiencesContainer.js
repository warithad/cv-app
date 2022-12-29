
import Experience from "./Experience";
import ContainerStyle from "./style/ContainerStyle";
import AddButton from "./utils/AddButton"
const ExperiencesContainer = ({
    experiences,
    handleAddExperience,
    handleChangeExperience,
    handleDeleteExperience
}) =>{
    const experienceItems = experiences.map(
        experience => (
            <Experience
                experience={experience}
                id={experience.id}
                key={experience.id}
                handleDeleteExperience={handleDeleteExperience}
                handleChangeExperience={handleChangeExperience}
            />
        )
    )
    return (
        <ContainerStyle>
            <h1>Experience</h1>
            {experienceItems}
            <AddButton title='Add' onClickAddButton={e => handleAddExperience(e)}/>
        </ContainerStyle>
    )
}

export default ExperiencesContainer;