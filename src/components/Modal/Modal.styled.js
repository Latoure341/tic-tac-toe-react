import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    
    display: flex;
    justify-content: center;
    align-items: center
`

export const ModalContainer = styled.div`
    min-width: 400px;
    margin: 0 auto;
    background: white;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 40px 20px;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center

    ${(props) => props.theme.media.mobile} {
        min-width: 100px;
        padding: 20px 10px;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
`

export const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 2rem;
`