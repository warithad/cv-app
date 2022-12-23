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
    
`

export default Input;