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
                       <></>
            }
            {mainScreenContent === "gamePage" && 
                            <ComputerScreenBox  tictactoe="True" >
                                <TicTacToe />
                              </ComputerScreenBox>
            }
            {mainScreenContent === "aboutPage" && 

                              <AboutPage/>

            }
            {mainScreenContent === "projectsPage" && 
                            <ProjectsPage />
            }
            {mainScreenContent === "contactPage" && 
                            <ContactPage />
            }
          </MainScreen>
        </RightColumn>
    </PageWrap>
  )
}