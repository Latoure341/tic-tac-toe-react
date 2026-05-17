import styled from "styled-components";

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    justify-content: center;
    align-items: center;
    margin: 0 4rem;
    padding: 1rem 2rem;

    ${(props) => props.theme.media.mobile}{
        flex-direction: row;
        gap: 0.5rem;
    }

`

export const AvatarWraper = styled.div`
    div {
        display: flex;
        
    }
`