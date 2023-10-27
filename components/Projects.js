import styled from "styled-components"
import FolderIcon from "./FolderIcon"
import { useState } from "react";

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
    width:100%;
    max-height: 500px; 
    overflow-y: auto;
    text-align:center;

`
const ProjectRow=styled.div`
    display:flex;
    flex-direction: row;
    padding:10px;
    gap:10px;
    text-align:center;
    align-items:center;
    font-family:"Segoe UI";
    &:hover{
        background-color:#eee;
    }

`
const ProjectInfoColumns=styled.div`
    display:flex;
    flex-direction: column;
    margin:0 50px;
    padding:20px;
    text-align:left;
    h2{
        text-decoration:underline;
    }
`

export default function ProjectsPage(){
    const [openProject, setOpenProject] = useState("");
    const projects = [
        { name: "Project 1", details: "Details for Project 1", link:"www.yourmom.org"  },
        { name: "Project 2", details: "Details for Project 2", link:"www.yourmom.org" },
        { name: "Project 3", details: "Details for Project 3", link:"www.yourmom.org" },
    ];

    return (
        <AboutBg>
            <HeaderBox />
            <ColumnsWrapper>
                <Sidebar />
                <ContentBox>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <ProjectRow
                                onClick={() => setOpenProject(project.name)}
                            >
                                <FolderIcon /> {project.name}
                            </ProjectRow>
                            {openProject === project.name && (
                            <ProjectRow>
                                <ProjectInfoColumns>
                                    <h2>Project name: </h2>
                                    <p>{project.name}</p>
                                </ProjectInfoColumns>
                                <ProjectInfoColumns>
                                    <h2>Project Details: </h2>
                                    <p>{project.details}</p>
                                </ProjectInfoColumns>
                                <ProjectInfoColumns>
                                    <h2>Project Link: </h2>
                                    <p>{project.link}</p>
                                </ProjectInfoColumns>
                            </ProjectRow>
                            )}
                        </div>
                    ))}
                </ContentBox>
            </ColumnsWrapper>
        </AboutBg>
    );
}