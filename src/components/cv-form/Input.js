const Input =(props)=>{
    const {placeHolder, type, name, value, handleChange} = props;

    return (
        <input 
            onChange={handleChange}
            placeholder={placeHolder}
            type={type}
            name={name} 
            value={value}
        />
    )
}


export default Input;