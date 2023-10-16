import styled from "styled-components"

const IconHolder=styled.div`
margin:0 20px;
&:hover{
    opacity:0.7;
}
`

export default function FolderIcon(){
    return(<IconHolder>
                <img src="/folderIcon.png"/>
            </IconHolder>
    )
}