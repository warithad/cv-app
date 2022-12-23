import styled from "styled-components";

const Input =(props)=>{
    const {placeHolder, type, name, value, handleChange} = props;

    return (
        <InputContainer 
            onChange={handleChange}
            placeholder={placeHolder}
            type={type}
            name={name} 
            value={value}
        />
    )
}

const InputContainer = styled.input`
    height: 30px;
    border: none;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    outline: none;
`

export default Input;