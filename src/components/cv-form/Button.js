import styled from "styled-components"

const Button =({title, onClick})=>{
    return (
        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
    )
}

const ButtonContainer = styled.button`

`

export default Button;