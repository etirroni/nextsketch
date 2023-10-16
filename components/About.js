import styled from "styled-components"
import Title from "./Title"

const AboutBg=styled.div`
    background-image: url('wordBg.png'); 
    background-size: cover;
    background-repeat: no-repeat; 
    width:100%;
    
    display:flex;
`
const WhiteBox=styled.div`
    background-color:#fff;
    margin:150px auto 0 auto;
    padding:50px;
    width:300px;
    text-align:center;
`

export default function About(){
    return(
        <AboutBg>
         <WhiteBox>
            <Title small="true">What is Lorem Ipsum?</Title>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </WhiteBox>
        </AboutBg>
    )
}