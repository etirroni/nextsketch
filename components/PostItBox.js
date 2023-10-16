import styled from "styled-components"

const Box=styled.div`
    width: 150px; 
    height: 150px; 
    box-shadow:2px 2px 2px 2px #000;
    background-color:#E8B90E;
    background-image: url('/postIt.png');
    background-size: cover; 
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