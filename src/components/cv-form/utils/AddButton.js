import styled from "styled-components"
import { AiOutlinePlus } from 'react-icons/ai'
const AddButton =({onClickAddButton})=>{
    return (
        <ButtonContainer
            className="add-button" 
            onClick={onClickAddButton}>Add 
            <AiOutlinePlus/>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    height: 40px;
    border: none;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: #1e293b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`

export default AddButton;