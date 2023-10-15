import Link from "next/link";
import styled from "styled-components";
import PostItBox from "./PostItBox";

const StyledNav = styled.header`
    width: 100%;
    height: 100%;
    background-image: url('/notebook.jpg');
    background-size: cover; 
    background-position: left; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    text-align: center;
    border: 4px solid #eee;
    border-radius:10px; 
    box-shadow:2px 2px 3px 5px #000;
`
const Title = styled.h1`
    color:#000;
    font-weight: bold;
    text-decoration:none;
    font-size:40px;
    margin-bottom: 50px;
    white-space:nowrap;   
`
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 30px;
    gap:20px;
`
const NavLinkWrapper= styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:50px;

`
const NavLink = styled(Link)`
    color:#000;
    text-decoration: underline; 
    font-weight:bold; 
    font-size:18px; 
`

export default function Nav() {
    return(
        <StyledNav>
            
                <Wrapper>
                <Title>To Do:</Title>
                <NavLinkWrapper>
                    <NavLink href={'/'}>
                        <PostItBox>Home</PostItBox>
                    </NavLink>
                    <NavLink href={'/about'}>
                        <PostItBox>About</PostItBox>
                    </NavLink>
                    <NavLink href={'/mywork'}>
                        <PostItBox>My work/projects</PostItBox>
                    </NavLink>
                    <NavLink href={'/contact'}>
                        <PostItBox>Contact</PostItBox>
                    </NavLink>
                </NavLinkWrapper>
                </Wrapper>
            
        </StyledNav>
    )
}