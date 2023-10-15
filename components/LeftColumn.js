import styled from "styled-components"

const StyleDiv = styled.div `
   
flex: 1; 
max-width: 25%; 
padding:20px;

`

export default function LeftColumn ({children}) {
    return(
        <StyleDiv>{children}</StyleDiv>
    )
}