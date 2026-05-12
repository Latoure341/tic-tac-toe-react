import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 80vh;
    width: 100vw;
    background-color: ${(props)=> props.theme.colors.primary}
`