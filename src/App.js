import Header  from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Main from "./components/Main";
import styled from "styled-components";

const App =()=>{
  return (
    <AppStyle className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </AppStyle>
  );
}

const AppStyle = styled.div`

`
export default App;
