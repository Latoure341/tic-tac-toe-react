import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

    padding: 2rem;
    background: ${(props)=>props.theme.colors.primary};
    color: ${props => props.theme.colors.text};

    .logo {
        height: 3rem;
        width: 3rem;
        cursor: pointer;
        border: 0.1rem solid ${props => props.theme.colors.text};
        fill: ${props => props.theme.colors.text}
    }
    .themeToggle {
        height: 2rem;
        width: 2rem;
        cursor: pointer;
    }
`