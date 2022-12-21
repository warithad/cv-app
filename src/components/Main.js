import React, { Component } from "react"
import CVForm from "./cv-form/CVForm"
import CVPage from "./cv-page/CVPage"

export default class Main extends Component{

    constructor(){
        super();

        this.state = {
            cv : {
               personal: {
                    firstName: '', 
                    lastName: '',
                    title: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    desc: ''
                },
                experience : {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''
                },
                education : {
                    university: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                }
            }
        }
    }

    handleChange =(e)=>{
        e.target.value = '';
        
    }
    render(){
        return (
            <>
                <CVForm cv={this.state.cv}/>
                <CVPage/>
            </>
        )
    }
}