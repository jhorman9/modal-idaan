const openModals = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

openModals.forEach((button, index) => {
    button.addEventListener('click', () => {
        const modal = modals[index];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeydown);
        };
        
        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeydown);

        const modalClose = modal.querySelector('.close');
        const closeModalBtn = modal.querySelector('.modal-footer .btn');

        modalClose.addEventListener('click', closeModal);
        closeModalBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    });
});