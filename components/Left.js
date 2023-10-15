import styled from "styled-components"

const StyleDiv = styled.div `
    max-width: 400px;
    margin:0 auto 0 0;
    padding:20px;

`

export default function Left ({children}) {
    return(
        <StyleDiv>{children}</StyleDiv>
    )
}