import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

const ModalTemplate = () => {
    const { handleModal, modalContent, modal } = useContext(ModalContext);
     if (modal) {
        return (
            ReactDOM.createPortal(<div>{modalContent}</div>, document.getElementsById("modal"))
        )
    }
    return null;
}

export default ModalTemplate