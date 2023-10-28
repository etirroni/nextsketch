import styled from "styled-components"
import Title from "./Title"
import { useState } from "react"

const AboutBg=styled.div`
    background-image: url('wordBg.png'); 
    background-size: cover;
    background-repeat: no-repeat; 
    width:800px;
    height:800px;
    
`
const GridContainer=styled.div`
    display:grid;
    font-family:"Segoe UI";
    grid-template-rows: 118px 100px 580px;
    grid-template-columns: 25% 25% 25% 25%;    
    width:100%;
`
const GridItem1=styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 5;
    border-bottom:4px solid #eee;
    text-align:center;
    
`
const GridItem2=styled.div`
    grid-row: 2 / 2;
    grid-column: 1 / 5;
    padding:10px;
    text-align:center;
`
const GridItem3=styled.div`
    grid-row: 3 / 3;
    grid-column: 1 / 5;
    padding:10px;
    text-align:center;
`
const PaperBox=styled.div`
    grid-row: 3 / 3;
    grid-column: 2 / 4;
    padding:10px;   
    margin-bottom:2px;
    padding:20px;
    text-align:center;
    background-color:white;
`
const WordButtons=styled.button`
    background:transparent;
    border:none;
    cursor:pointer;
    &:hover{
        background:#a9a9a9;
    }
    
`
const WordInputTitle=styled.input`
    display:flex;
    border:none;
    text-decoration:underline;
    font-size:large;
    &:focus{
        outline:none;
        border: 2px solid #fff; 
    }
`
const WordInputText=styled.input`
    display:flex;
    border:none;
    font-size:medium;
    &:focus{
        outline:none;
        border: 2px solid #fff; 
    }
`
const WordMainTitle=styled.input`
    display:flex;
    border:none;
    font-size:x-large;
    text-decoration:underline;
    margin: 0 auto;
    width:30px;
    &:focus{
        outline:none;
        border: 2px solid #fff; 
    }
`
const ProfileWrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export default function About(){
    const [mainTitle,setMainTitle] = useState('CV');
    const [educationTitle, setEducationTitle] = useState('Education:');
    const [educationText, setEducationText] =useState('bachelorchchchhchc')
    const [workexpTitle, setWorkexpTitle] = useState('Work experience:');
    const [workexpText, setWorkexpText] =useState('bachelorchchchhchc')
    const [aboutTitle, setAboutTitle] = useState('About Me:');
    const [aboutText, setAboutText] =useState('imiamiam')

    return(
        <AboutBg>
         <GridContainer>
            <GridItem1>
                <div style={{height:'24px'}}/>
                <div style={{textAlign:'left', display:"flex", gap:"5px"}}>
                    <WordButtons>File</WordButtons>
                    <WordButtons>Home</WordButtons>  
                    <WordButtons>Insert</WordButtons> 
                    <WordButtons>Design</WordButtons> 
                    <WordButtons>Layout</WordButtons> 
                    <WordButtons>References</WordButtons> 
                    <WordButtons>Review</WordButtons>
                    <WordButtons>View</WordButtons>  
                </div>
                  
            </GridItem1>
            <GridItem2>

            </GridItem2>
            <GridItem3>

            </GridItem3>
            <PaperBox>
                <WordMainTitle
                        value={mainTitle}
                        onChange={(event)=>setMainTitle(event.target.value)}
                    />
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <ProfileWrapper>
                        <div>
                           <p>name:</p> 
                           <p>phone:</p> 
                           <p>email:</p> 
                        </div>
                        <div>
                                asd
                        </div>
                    </ProfileWrapper>
                    <WordInputTitle
                        value={educationTitle}
                        onChange={(event)=>setEducationTitle(event.target.value)}
                    />
                        <WordInputText
                            value={educationText}
                            onChange={(event)=>setEducationText(event.target.value)}
                        />
                    <WordInputTitle
                        value={workexpTitle}
                        onChange={(event)=>setWorkexpTitle(event.target.value)}
                    />
                        <WordInputText
                            value={workexpText}
                            onChange={(event)=>setWorkexpText(event.target.value)}
                        />
                    <WordInputTitle
                        value={aboutTitle}
                        onChange={(event)=>setAboutTitle(event.target.value)}
                    />
                        <WordInputText
                            value={aboutText}
                            onChange={(event)=>setAboutText(event.target.value)}
                        />
                </div>
            </PaperBox>
        </GridContainer>
        </AboutBg>
    )
}