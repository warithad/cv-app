import React, { Component } from 'react';
import PersonsalInfo from './PersonalInfo';

const CVForm =({cv, handleChange})=>{

        return (
            <form>
                <PersonsalInfo personal={cv.personal} handleChange={handleChange}/>
            </form>
        )
}

export default CVForm;