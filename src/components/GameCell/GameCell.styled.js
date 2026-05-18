import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.tertiary};
    border: none;
    border-radius: 20px;
    color: ${(props) => props.theme.colors.primary};
    font-size: 3.5rem;
    box-shadow: 3px 5px 3px gray;
    width: 6rem;
    height: 6rem;

    cursor: pointer;
`

export const ElementXO = styled.span`
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    

`