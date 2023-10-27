import ComputerScreenBox from "@/components/ComputerScreen";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";
import Nav from "@/components/Nav";
import AboutPage from "@/components/About";
import ProjectsPage from "@/components/Projects";
import ContactPage from "@/components/Contact";
import TicTacToe from "@/components/TicTacToe";
import styled from "styled-components";
import { useState } from "react";


const PageWrap=styled.div`
  display:flex;

`
const MainScreen=styled.div`
  display:flex;
  height:100%;
`

export default function HomePage() {
  const [mainScreenContent, setMainScreenContent] = useState("homePage");
  const onContentChange = (content) => {
    setMainScreenContent(content);
  };
  return(
    <PageWrap>
        <LeftColumn>
          <Nav onContentChange={onContentChange}/>
        </LeftColumn>
        <RightColumn>
          <MainScreen>
            {mainScreenContent === "homePage" && 
                            <ComputerScreenBox>
                                <TicTacToe />
                              </ComputerScreenBox>}
            {mainScreenContent === "aboutPage" && 
                            <ComputerScreenBox word="True">
                              <AboutPage />
                            </ComputerScreenBox>}
            {mainScreenContent === "projectsPage" && 
                            <ComputerScreenBox word="True">
                              <ProjectsPage />
                            </ComputerScreenBox>}
            {mainScreenContent === "contactPage" && 
                            <ContactPage word="True" />}
          </MainScreen>
        </RightColumn>
    </PageWrap>
  )
}