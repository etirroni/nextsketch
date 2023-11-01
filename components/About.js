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
    margin-bottom:5px;
    &:focus{
        outline:none;
        border: 2px solid #fff; 
    }
`
const WordInputText=styled.input`
    display:flex;
    border:none;
    font-size:medium;
    margin-bottom:15px;
    &:focus{
        outline:none;
        border: 2px solid #fff; 
    }
`
const WordMainTitle=styled.input`
    display:flex;
    border:none;
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
    background-color:#eee;
    border-radius:10px;
    padding:10px;
    margin-top:20px;
    font-size:small;
    text-align:left;
    img{
  
        border-radius:10px;
        width:60%;
        padding:20px;
    }
`
const WordSelect=styled.select`

`

export default function About(){
    const [font,setFont] = useState('Calibri');
    const [fontSize,setFontSize] = useState('11');
    const [mainTitle,setMainTitle] = useState('CV');
    const [educationTitle, setEducationTitle] = useState('Education:');
    const [educationText, setEducationText] =useState('bachelorchchchhchc')
    const [workexpTitle, setWorkexpTitle] = useState('Work experience:');
    const [workexpText, setWorkexpText] =useState('bachelorchchchhchc')
    const [aboutTitle, setAboutTitle] = useState('About Me:');
    const [aboutText, setAboutText] =useState('imiamiam')

    const basicFonts = [
        "Arial, sans-serif",
        "Helvetica, sans-serif",
        "Times New Roman, serif",
        "Georgia, serif",
        "Courier New, monospace",
        "Verdana, sans-serif",
        "Tahoma, sans-serif",
        "Impact, sans-serif",
        "Comic Sans MS, cursive",
        "Palatino, serif"
      ];
    
    return(
        <AboutBg>
         <GridContainer>
            <GridItem1>
                <div style={{height:'24px', backgroundColor:'transparent'}}/>
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
                <div style={{ display: "flex", marginTop: "10px", padding: "10px", gap: "5px" }}>
                <WordSelect onChange={(event) => setFont(event.target.value)}>
                    <option>Calibri</option>
                    {basicFonts?.map((f, index) => (
                    <option key={index}>{f}</option>
                    ))}
                </WordSelect> 
                <WordSelect onChange={(event) => setFontSize(event.target.value)}>
                    {Array.from({ length: 10 }, (_, index) => (
                    <option key={index}>{index + 11}</option>
                    ))}
                </WordSelect>
                </div>
            </GridItem1>
                
            <GridItem2>

            </GridItem2>
            <GridItem3>

            </GridItem3>
            <PaperBox>
                <WordMainTitle
                    style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                    value={mainTitle}
                    onChange={(event)=>setMainTitle(event.target.value)}
                />
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <ProfileWrapper>
                        <div style={{backgroundColor:"#eee", padding:"10px", borderRadius:"10px"}}>
                           <p>Name:<br/> my name</p> 
                           <p>Phone:<br/> +358401234567</p> 
                           <p>Email:<br/>mrsmith@yahoo.org</p> 
                        </div>
                        <div style={{display:"flex",justifyContent:"right"}}>
                                <img src="profiilikuva.png"/>
                        </div>
                    </ProfileWrapper>
                    <div style={{padding:"10px"}}>
                    <WordInputTitle
                        style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                        value={educationTitle}
                        onChange={(event)=>setEducationTitle(event.target.value)}
                    />
                        <WordInputText
                            style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                            value={educationText}
                            onChange={(event)=>setEducationText(event.target.value)}
                        />
                    <WordInputTitle
                        style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                        value={workexpTitle}
                        onChange={(event)=>setWorkexpTitle(event.target.value)}
                    />
                        <WordInputText
                            style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                            value={workexpText}
                            onChange={(event)=>setWorkexpText(event.target.value)}
                        />
                    <WordInputTitle
                        style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                        value={aboutTitle}
                        onChange={(event)=>setAboutTitle(event.target.value)}
                    />
                        <WordInputText
                            style={{fontFamily:`${font}`,fontSize:`${fontSize}px`}}
                            value={aboutText}
                            onChange={(event)=>setAboutText(event.target.value)}
                        />
                    </div>
                </div>
            </PaperBox>
        </GridContainer>
        </AboutBg>
    )
}