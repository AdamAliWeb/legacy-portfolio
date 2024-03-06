import { useState } from "react";

export default function useModal(initialState) {
    const [modalActive, setModalActive] = useState(initialState);

    const openModal = () => setModalActive(true);

    const closeModal = () => setModalActive(false);

    return [modalActive, openModal, closeModal];
}
