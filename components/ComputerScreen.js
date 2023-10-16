import styled, {css} from "styled-components"

export const BoxStyle = css`
    width: 100%;
    height: 100%;
    background-color: #000;    
    color: #0F0; 
    font-family: "Courier New", monospace; 
    font-size: 14px;
    line-height: 1.5; 
    border: 2px solid #00F; 
    border-radius: 4px;
    overflow: auto;

${props => props.word &&  css`
    font-size: 14px;
    color:#000;
  `}
`
const StyledBox=styled.div`
${BoxStyle}
`;

export default function ComputerScreenBox({children, ...rest}){
    return(
        <StyledBox {...rest}>
            {children}
        </StyledBox>
    )
}