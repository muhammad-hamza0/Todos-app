import React from 'react'

interface IModal {
    modalOpen: boolean;
    modalClose: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ modalOpen, modalClose, children }) => {
    return (
        <div>
           
            <dialog id="my_modal_3" className={`modal  ${modalOpen ? "modal-open" : ""}`}>
                <div className="modal-box p-9">
                <button className="btn btn-sm bg-primary text-white btn-circle absolute right-2 top-2" onClick={() => modalClose(false)}>✕</button>
                    {children}
                </div>
            </dialog>
        </div>
    )
}

export default Modal
