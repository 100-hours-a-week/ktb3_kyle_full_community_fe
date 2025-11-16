export const Modal = (title, text) => {
    return (
        `
            <div class="modal-overlay hidden">
                <div class="modal">
                <img src="/src/assets/warning-fill.svg" alt="warning">
                    <h3 class="modal-title">${title}</h3>
                    <p class="modal-text">${text}</p>

                    <div class="modal-buttons">
                        <button id="cancel-button" class="modal-btn cancel-btn">취소</button>
                        <button class="modal-btn confirm-btn">확인</button>
                    </div>
                </div>
            </div>
        `
    )
}