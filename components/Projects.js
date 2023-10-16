import styled from "styled-components"
import FolderIcon from "./FolderIcon"

const AboutBg=styled.div`
    background-image: url('folderInside.jpg'); 
    background-size: cover;
    background-repeat: no-repeat; 
    width:100%;
    display:flex;
    flex-direction:column;

`
const HeaderBox=styled.div`
    top:0;
    width:100%;
    height:300px;
    background-color:transparent;
    
`
const ColumnsWrapper=styled.div`

    display:flex;
    flex-direction:row;
`
const Sidebar=styled.div`
    background-color:transparent;
    width:300px;
    height:600px;
`
const ContentBox=styled.div`
    
    display:flex;
    flex-direction: column;
    gap:20px;
    padding:20px;
    width:100%;
    max-height: 500px; 
    overflow-y: auto;
    text-align:center;

`
const ProjectRow=styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    padding:10px;
    gap:10px;
    font-family:"Segoe UI";
    &:hover{
        background-color:#eee;
    }

`

export default function ProjectsPage(){
    return(
        <AboutBg>
            <HeaderBox/>
            <ColumnsWrapper>
                <Sidebar/>
                <ContentBox>
                    <ProjectRow>
                        <FolderIcon/>Project 1
                    </ProjectRow>
                    <ProjectRow>
                        <FolderIcon/>Project 2
                    </ProjectRow>
                    <ProjectRow>
                        <FolderIcon/>Project 3
                    </ProjectRow>

                    <ProjectRow>
                        <FolderIcon/>Project 3
                    </ProjectRow>
                    <ProjectRow>
                        <FolderIcon/>Project 3
                    </ProjectRow>
                    <ProjectRow>
                        <FolderIcon/>Project 3
                    </ProjectRow>
                    <ProjectRow>
                        <FolderIcon/>Project 3
                    </ProjectRow>
              
                </ContentBox>
            </ColumnsWrapper>
        </AboutBg>
    )
}