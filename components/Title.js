import styled, { css } from "styled-components";

export const TitleStyle = css`
  font-weight: bold;
  text-decoration: none;
  font-size: 40px;
  margin-bottom: 50px;
  white-space: nowrap;
  
  ${props => props.small &&  css`
    font-size: 28px;
    margin-bottom: 30px;
  `}
`;

const StyledTitle = styled.div`
  ${TitleStyle}
`;

export default function Title({ children, ...rest }) {
  return (
    <StyledTitle {...rest}>{children}</StyledTitle>
  );
}