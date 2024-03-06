import "./ModalWindow.scss";

export default function ModalWindow({ children, closeModal }) {
    return (
        <div className="modal-container" onClick={() => closeModal()}>
            <section
                className="modal-window card"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </section>
        </div>
    );
}
