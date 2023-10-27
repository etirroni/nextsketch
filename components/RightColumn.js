import styled from "styled-components"

const StyleDiv = styled.div `
   
flex: 3; 
max-width: 75%; 
padding:20px;
margin:20px;


`

export default function RightColumn ({children}) {
    return(
        <StyleDiv>{children}</StyleDiv>
    )
}