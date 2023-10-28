import styled from "styled-components";
import FolderIcon from "./FolderIcon";
import CmdIcon from "./CmdIcon";
import WordIcon from "./WordIcon";
import ExplorerIcon from "./ExplorerIcon";

const StyledNav = styled.header`
    width: 100%;
    height: 100%;
    display: flex; 
    top:0;
`
const NavLinkWrapper= styled.div`
    display:flex;
    flex-direction:column;
    align-items: left;
  
    gap:40px;
    width:100%;
    height:100%;
`
const ButtonHolder = styled.div`
    display:flex;
    align-items: center;
    justify-content: left;
    gap:4px;
`
const Button = styled.button`  
    border:none;
    background-color:transparent;
    font-size:18px;
    padding:10px; 
    color:#fff;
    &:hover{
        scale:1.1;
        
    }

`

export default function Nav({onContentChange}) {
    return(
        <StyledNav>
                <NavLinkWrapper>
                    <ButtonHolder>
                        <Button onClick={() => onContentChange("homePage")}>       
                            <CmdIcon/>
                            Home.exe
                        </Button>
                    </ButtonHolder>
                    <ButtonHolder>
                        <Button onClick={() => onContentChange("aboutPage")}>       
                            <WordIcon/>
                            About
                        </Button>
                    </ButtonHolder>
                    <ButtonHolder>
                        <Button onClick={() => onContentChange("projectsPage")}>       
                            <FolderIcon/>
                            Projects
                        </Button>
                    </ButtonHolder>
                    <ButtonHolder>
                        <Button onClick={() => onContentChange("contactPage")}>       
                            <ExplorerIcon/>
                            Contact_Info
                        </Button>
                    </ButtonHolder>
                </NavLinkWrapper>       
        </StyledNav>
    )
}