import styled from "styled-components"
import Title from "./Title"

const AboutBg=styled.div`
    background-image: url('contactbg.png'); 
    background-size:cover;
    background-repeat: no-repeat;
    background-color:transparent;
    border-top:20px solid blue;
    border-left:5px solid blue;
    border-right:5px solid blue;
    border-bottom:5px solid blue;
    width:1020px;
    height:856px;
    display:flex;
    
`
const GridContainer=styled.div`
    display:grid;
    font-family:"Segoe UI";
    grid-template-rows: 385px 150px 290px;
    grid-template-columns: 715px 280px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding:10px;
    width:100%;
`
const GridItem1=styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    margin-right:15px;
    border-radius:10px;
    padding:10px;
    margin-top:120px;
    border: 4px solid blue;
    text-align:center;
`
const GridItem2=styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color:transparent;
    margin-right:15px;
    border: 4px solid green;
    border-radius:10px;
    padding:10px; 
`
const GridItem3=styled.div`
    grid-row: 3 / 3;
    grid-column: 1 / 2;
    background-color:transparent;
    margin-right:15px;
    border: 4px solid red;
    border-radius:10px;
    padding:10px;    
`
const SidebarRight=styled.div`
    grid-row: 1 / 4;
    grid-column: 2 / 2;
    background-color:transparent;
    margin-top:40px;
    margin-bottom:40px;
    border-radius:10px;
    border: 4px solid orange;
`
const ContactTitles=styled.h2`
    
`

export default function ContactPage(){
    return(
        <AboutBg>
            <GridContainer>
                <GridItem1>
                    <ContactTitles>Joel Tirroniemi</ContactTitles>
                    <p style={{ paddingTop: '20px' }}>Trust me i'm an engineer... (soon). Currently working on my thesis in<br/>
                                                      lorem ipsum </p>
                </GridItem1>
                <GridItem2>
                    <ContactTitles>Contact Info</ContactTitles>
                    <p>You can find my contact info from my LinkedIn profile down below</p>
                </GridItem2>
                <GridItem3>
                    <ContactTitles>Links</ContactTitles>
                    <p>To my Linkedin profile:</p>
                    <p>Github:</p>
                </GridItem3>
                <SidebarRight>

                </SidebarRight>
            </GridContainer>
        </AboutBg>
    )
}