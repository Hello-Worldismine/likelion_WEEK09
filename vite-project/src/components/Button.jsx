import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.div`
    background-color: ${(props) => props.color};
    width: 400px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 12px;
    color: white;
`;

export function Button({ label, bgColor, buttonHandler }){
    return <ButtonWrapper color={bgColor} onClick={(buttonHandler)}>{label}</ButtonWrapper>;
}

export default Button;