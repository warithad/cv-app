import styled from "styled-components";

const DeleteButton =({onclickDeleteButton})=>{
    return (
        <DeleteButtonStyle
            className="delete-button"
            onClick={onclickDeleteButton}
        >
            Delete
        </DeleteButtonStyle>
    )
}

const DeleteButtonStyle = styled.button`
    height: 40px;
    border: none;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: #1e293b;
    color: white;
`
export default DeleteButton;