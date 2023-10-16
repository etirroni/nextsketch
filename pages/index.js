import ComputerScreenBox from "@/components/ComputerScreen";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";
import Nav from "@/components/Nav";
import AboutPage from "@/components/About";
import TicTacToe from "@/components/TicTacToe";
import styled from "styled-components";
import { useRouter } from 'next/router';
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
          </MainScreen>
        </RightColumn>
    </PageWrap>
  )
}