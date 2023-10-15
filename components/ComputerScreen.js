import styled from "styled-components"

const Box = styled.div`
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
}
`

export default function ComputerScreenBox({children}){
    return(
        <Box>
            {children}
        </Box>
    )
}