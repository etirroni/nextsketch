import styled from "styled-components"

const IconHolder=styled.div`
margin:0 10px;
&:hover{
    opacity:0.7;
}
`

export default function WordIcon(){
    return(<IconHolder>
                <img src="/wordIcon.png"/>
            </IconHolder>
    )
}