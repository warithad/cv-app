
import React, { Component } from "react";
import Input from "./Input";

const PersonsalInfo =({personal, handleChange})=>{
    
        return (
            <section>
                <Input name='firstName'
                       placeHolder='First Name' 
                       type='text' 
                       value={personal.firstName}
                       handleChange={e =>handleChange(e)}
                />
                
                <Input name='lastName'
                       placeHolder='Last Name' 
                       type='text' 
                       value={personal.lastName}
                       handleChange={e =>handleChange(e)}
                />
                
                <Input name='title' 
                       placeHolder='Title' 
                       type='text' 
                       value={personal.title}
                       handleChange={e => handleChange(e)}
                />
                
                <Input name='email' 
                       placeHolder='Email Address' 
                       type='email' 
                       value={personal.email}
                       handleChange={e => handleChange(e)}
                />

                <Input name='phoneNumber' 
                       placeHolder='Phone Number' 
                       type='number' 
                       value={personal.phone}
                       handleChange={e => handleChange(e)}
                />
                
                <Input name='address' 
                       placeHolder='Address' 
                       type='text' 
                       value={personal.address}
                       handleChange={e => handleChange(e)}
                />

                <Input name='description' 
                       placeHolder='Description' 
                       type='text' 
                       value={personal.desc}
                       handleChange={e => handleChange(e)}
                />
             </section>
        )
}    


export default PersonsalInfo;