import styled from "styled-components"

const IconHolder=styled.div`
    &:hover{
        scale:1.1;
    }
`

export default function CmdIcon(){
    return(<IconHolder>
                <img src="/cmdIcon.png"/>
            </IconHolder>
    )
}