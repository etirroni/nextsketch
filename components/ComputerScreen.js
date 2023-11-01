import styled, {css} from "styled-components"


export const BoxStyle = css`
border-color:blue;
border-style:solid;
border-width: 0 5px 5px 5px;

  

${props => props.tictactoe &&  css`
    width:100%;
    font-size: 14px;
    color: #0F0; 
    font-family: "Courier New", monospace;
    line-height: 1.5; 
    border-radius: 4px;
    background-color: #000;
          
`}

${props => props.word &&  css`
    font-size: 14px;
    color:#000;
  `}

${props => props.about &&  css`
    width:800px;
    height:800px;
    border:4px solid blue;
`}
`
const CornerButtons=styled.button`
padding-left:8px;
padding-right:8px;
border-radius:0; 
color:white;
background:transparent;
border:none;
&:hover{
    background:#a9a9a9;
}


${props => props.x &&  css`
&:hover{
    background:red;
}`
}
`

const StyledBox=styled.div`
${BoxStyle}
`;

export default function ComputerScreenBox({children, ...rest}){
    return(
        <StyledBox {...rest}>
            <div style={{height:"20px",padding:"5px", backgroundColor:"blue"}}>
                <div style={{ justifyContent:'right', display:'flex',gap:'2px'}}>
                    <CornerButtons>
                    ─
                    </CornerButtons>
                    <CornerButtons>
                    🖵
                    </CornerButtons>
                    <CornerButtons x="True">
                    ✕
                    </CornerButtons>
                </div>
            </div>
            {children}
        </StyledBox>
    )
}