import styled from "styled-components";

const PageHeader =({firstName, lastName, phoneNumber, email})=>{
    return (
        <PageHeaderStyle>
            <h1 className="cv-name">{firstName} {lastName}</h1>
            <p className="cv-info">{email} | {phoneNumber}</p>
        </PageHeaderStyle>       
    )
}

const PageHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default PageHeader;