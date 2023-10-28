import styled from "styled-components"
import Title from "./Title"
import CogIcon from "./CogIcon"

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
    text-align:center;
`
const GridItem2=styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color:transparent;
    margin-right:15px;
    border-radius:10px;
    padding:10px; 
`
const GridItem3=styled.div`
    grid-row: 3 / 3;
    grid-column: 1 / 2;
    background-color:transparent;
    margin-right:15px;
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
const NameRow=styled.div`
    display:flex
    align-items:center;
    justify-content:center;
    text-align:left;
    flex-direction: column;
    padding-top:15px;
    svg{
        width:20px;
        
    }
  
`

export default function ContactPage(){
    return(
        <AboutBg>
            <GridContainer>
                <GridItem1>
                    <h2>Joel Tirroniemi</h2>
                    <NameRow>
                    <div style={{ display:'flex', flexDirection:'row',alignItems:'center', gap:'5px'}}>
                            <CogIcon/>
                        <p>
                            ICT-Engineer (soon). <br/> 
                            Fullstack / frontend developement. <br/>
                            Currently working on my thesis. Open for new work opportunities.
                        </p>
                    </div>    
                        
                    </NameRow>
                </GridItem1>
                <GridItem2>
                    <h2>Contact Info</h2>
                    <p>You can find my contact info from my LinkedIn profile down below.</p>
                </GridItem2>
                <GridItem3>
                    <h2>Links</h2>
                    <a href='https://www.linkedin.com/in/eelis-tirroniemi-392261265'target='_blank' rel='noopener noreferrer'>
                        <p>To my Linkedin profile</p>
                    </a>
                    <a href='https://github.com/etirroni' target='_blank' rel='noopener noreferrer'>
                        <p>Github (most of the repositories are private).</p>
                    </a>
                </GridItem3>
                <SidebarRight>

                </SidebarRight>
            </GridContainer>
        </AboutBg>
    )
}