import styled from "styled-components"

const Box=styled.div`
    width: 150px; 
    height: 150px; 
    box-shadow:2px 2px 3px 2px #000;
    border-radius:4px;
    background-color:#E8B90E;
    background-image: url('/postIt.png');
    background-size: cover; 
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        scale:1.1;
        rotate:5deg;
    }
`

export default function PostItBox({children}){
    return(
        <Box>
            {children}
        </Box>
    )
}