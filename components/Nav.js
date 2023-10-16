import styled from "styled-components";
import FolderIcon from "./FolderIcon";
import CmdIcon from "./CmdIcon";
import WordIcon from "./wordIcon";

const StyledNav = styled.header`
    width: 100%;
    height: 100%;
    display: flex; 
    top:0;
`
const NavLinkWrapper= styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:50px;
`
const Button = styled.button`  
    border:none;
    background-color:transparent;
    font-size:18px; 
    color:#fff;
`

export default function Nav({onContentChange}) {
    return(
        <StyledNav>
                <NavLinkWrapper>
                    <Button onClick={() => onContentChange("homePage")}>       
                        <CmdIcon/>
                        Home
                    </Button>
                    <Button onClick={() => onContentChange("aboutPage")}>       
                        <WordIcon/>
                        About
                    </Button>
                    <Button onClick={() => onContentChange("myWorkPage")}>       
                        <FolderIcon/>
                        Projects
                    </Button>
                    <Button onClick={() => onContentChange("contactPage")}>       
                        <FolderIcon/>
                        Contact_Info
                    </Button>
                </NavLinkWrapper>       
        </StyledNav>
    )
}