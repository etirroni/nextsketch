import styled from "styled-components"

const IconHolder=styled.div`
    &:hover{
        scale:1.1;
    }
`

export default function FolderIcon(){
    return(<IconHolder>
                <img src="/folderIcon.png"/>
            </IconHolder>
    )
}