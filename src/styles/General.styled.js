import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.columnBased ? "column" : "row"};
    justify-content: center;
    align-items: center;
    
    height: 80vh;
    width: 100vw;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    text-align: center;

     ${(props) => props.theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
     }
`

export const Title = styled.h1`
    color: ${(props)=> props.theme.colors.tertiary};
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
    background: transparent;
`

export const Subtitle = styled.h2`
    color: ${(props)=> props.theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 200;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
`

export const Text = styled.p`
    color: ${(props)=> props.theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: 200;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
`