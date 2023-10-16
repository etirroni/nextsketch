import styled from "styled-components"

const IconHolder=styled.div`
    &:hover{
        scale:1.1;
    }
`

export default function WordIcon(){
    return(<IconHolder>
                <img src="/wordIcon.png"/>
            </IconHolder>
    )
}