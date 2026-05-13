import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props)=>props.theme.colors.primary};
    background-color: ${(props)=>props.theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Poppins', san-serif;
    min-width: 200px;
    cursor: pointer;
    padding: 0.5rem;
    margin: 1rem 0;
    border: none;
    border-radius: 5px;

    &:hover {
        box-shadow: 1px 1px 12px ${(props)=>props.theme.colors.purple};
    }
`