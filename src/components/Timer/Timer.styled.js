import styled from "styled-components";

export const TimerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
`