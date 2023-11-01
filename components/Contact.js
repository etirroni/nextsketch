import styled from "styled-components"
import CogIcon from "./CogIcon"
import HomeIcon from "./icons/HomeIcon"
import UpdateIcon from "./icons/UpdateIcon"
import PuzzleIcon from "./icons/PuzzleIcon"
import FireIcon from "./icons/FireIcon"
import GroupIcon from "./icons/GroupIcon"
import UserIcon from "./icons/UserIcon"

const AboutBg=styled.div`
    background-color:#E3DAD5;
    padding-bottom:10px;
    border-top:25px solid #0502a8;
    width:100%;
    display:flex;
    flex-direction:column;
    
`
const GridContainer=styled.div`
    display:grid;
    font-family:"Segoe UI";
    grid-template-rows: 33% 33% 33%;
    grid-template-columns: 75% 23%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding:10px;
    width:100%;
    overflow:auto;
`
const WhiteBox=styled.div`
    border-radius:10px;
    padding:10px;
    background-color:white;
    box-shadow:1px 1px 1px 1px #000;
`
const GridItem1=styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    margin-right:15px;
`
const GridItem2=styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    margin-right:15px;
`
const GridItem3=styled.div`
    grid-row: 3 / 3;
    grid-column: 1 / 2;
    margin-right:15px;
    `
    const SidebarRight=styled.div`
    grid-row: 1 / 4;
    grid-column: 2 / 2;
    display:flex;
    flex-direction:column;
    margin-right:10px;
    gap:10px;
    background-color:transparent;
    svg{
        width:50px;
    }
`
const HeaderRow=styled.div`
    
    display:flex;
    padding:5px;
    background-color:#0804f8;
    color:white;
    gap:15px;
    svg{
        width:20px;
    }
`
const HeaderInput=styled.input`
    background-color:transparent;
    color:white;
    border-radius:3px;
    padding:5px;
    border:none;

`
const Grid1NameRow=styled.div`
    background-color:#0072B1;
    color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    padding:10px;
    gap:10px;
    img{
        width:100px;
        background-color:white;
        border-radius:60px;
        padding:2px;
    }
`
const Grid1DescRow=styled.div`
    display:flex
    align-items:center;
    justify-content:center;
    text-align:left;
    padding:10px;
    gap:10px;
    flex-direction: column;
    svg{
        width:20px;  
    }
`
const Grid1ButtonRow= styled.div`
    display:flex
    align-items:center;
    text-align:left;
    padding:10px; 
       
`


export default function ContactPage(){
    return(
        <AboutBg>
            <HeaderRow>
                <div style={{display:"flex",flex:"1", gap:"15px",alignItems:"center", marginLeft:"10px"}}>
                    <p>←</p>
                    <p>→</p>
                    <UpdateIcon/>
                    <HomeIcon/>
                    <div style={{display:"flex",flex:"1",gap:"10px",alignItems:"center",backgroundColor:"#0502a8", color:"#fff",height:"100%", borderRadius:"5px"}}>
                        <p style={{marginLeft:"5px"}}>🛡</p>
                        <p>🔒</p>
                        <HeaderInput placeholder="www.contactInfo.org/eTirr" style={{flex:"1"}}/>
                        <p style={{padding:"4px", fontSize:"small", borderRadius:"5px", backgroundColor:"#0804f8", fontFamily:"Segoe UI"}}>100%</p>
                        <p style={{marginRight:"5px"}}>☆</p>
                    </div>
                    <PuzzleIcon/>
                    <p>☰ </p>
                </div>
            </HeaderRow>
            <GridContainer>
                <GridItem1>
                    <WhiteBox>
                    <Grid1NameRow>
                        <img src="profiilikuva.png"/>
                        <h2>E Tirroniemi</h2>
                    </Grid1NameRow>
                    <Grid1DescRow>
                        <CogIcon/>
                        ICT-Engineer (soon). <br/> 
                        Fullstack / frontend developement. <br/>
                        Currently working on my thesis. Open for new work opportunities.
                    </Grid1DescRow>
                    <Grid1ButtonRow>
                        <button style={{padding:"10px", marginRight:"10px",backgroundColor:"#0072B1", color:"white", border:"none", borderRadius:"20px"}}>Message</button>
                        <button style={{padding:"10px", marginRight:"10px",backgroundColor:"white",border:"#0072B1", color:"#0072B1", borderRadius:"20px"}}>Follow</button>
                        <button style={{padding:"10px", marginRight:"10px",backgroundColor:"transparent", borderRadius:"20px"}}>More</button>
                    </Grid1ButtonRow>
                </WhiteBox>
                </GridItem1>
                <GridItem2>
                    <WhiteBox>
                        <h2 style={{color:"white", backgroundColor:"#0072B1", padding:"10px", borderRadius:"10px"}}>Contact Info</h2>
                        <p style={{padding:"10px"}}>You can find my contact info from my LinkedIn profile down below.</p>
                    </WhiteBox>
                </GridItem2>
                <GridItem3>
                    <WhiteBox>
                        <h2 style={{color:"white", backgroundColor:"#0072B1", padding:"10px", borderRadius:"10px"}}>Links</h2>
                        <a href='https://www.linkedin.com/in/eelis-tirroniemi-392261265'target='_blank' rel='noopener noreferrer'>
                            <p style={{padding:"10px", textDecoration:"none"}}>To my Linkedin profile</p>
                        </a>
                        <a href='https://github.com/etirroni' target='_blank' rel='noopener noreferrer'>
                            <p style={{padding:"10px", textDecoration:"none"}}>Github (most of the repositories are private).</p>
                        </a>
                    </WhiteBox>
                </GridItem3>
                <SidebarRight>
                    <WhiteBox>
                        <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                            <PuzzleIcon/>
                            <h3>Tools i like to use on my projects:</h3>
                        </div>
                        <p>JavaScript</p>
                        <p>Next / React</p>
                        <p>MongoDB / Firebase</p>
                        <p>C#</p>
                        For visuals:<br/>
                        GIMP, Blender
                    </WhiteBox>
                    <WhiteBox>
                        <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                            <GroupIcon/>
                            <h3>These users also follow E Tirroniemi:</h3>
                        </div>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <UserIcon/>
                            <p style={{padding:"10px"}}>Elon Musk</p>
                        </div>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <UserIcon/>
                            <p style={{padding:"10px"}}>Bill Gates</p>
                        </div>
                    </WhiteBox>
                    <WhiteBox>
                        <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                            <FireIcon/>
                            <h3>Most viewed posts</h3>
                        </div>
                        <button style={{border:"none", padding:"10px", color:"white", backgroundColor:"#0072B1", borderRadius:"50px"}}>See more</button>
                    </WhiteBox>
                </SidebarRight>
            </GridContainer>
        </AboutBg>
    )
}