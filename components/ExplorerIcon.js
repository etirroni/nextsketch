import styled from "styled-components"

const IconHolder=styled.div`
img{
    width:50px;
}
&:hover{
    opacity:0.7;
}

`

export default function ExplorerIcon(){
    return(<IconHolder>
                <img src="/explorerIcon.png"/>
            </IconHolder>
    )
}