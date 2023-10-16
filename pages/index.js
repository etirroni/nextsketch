import ComputerScreenBox from "@/components/ComputerScreen";
import LeftColumn from "@/components/LeftColumn";
import Nav from "@/components/Nav";
import RightColumn from "@/components/RightColumn";
import TicTacToe from "@/components/TicTacToe";
import styled from "styled-components";

const PageWrap=styled.div`
  display:flex;
`

export default function HomePage() {
  return(
    <PageWrap>
        <LeftColumn>
          <Nav/>
        </LeftColumn>
        <RightColumn>
          <ComputerScreenBox>
            <TicTacToe/>
          </ComputerScreenBox>
        </RightColumn>
    </PageWrap>
  )
}