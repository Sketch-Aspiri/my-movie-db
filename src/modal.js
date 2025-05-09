document.addEventListener('DOMContentLoaded', () => {
    const detailBtn = document.querySelector('.detail-btn');
    const modal = document.getElementById('highlight-modal');
    const closeBtn = document.querySelector('.close-btn');
    const description = document.querySelector('.highlight-description');
    const modalText = document.querySelector('.modal-description');

    if (detailBtn && modal && closeBtn && description && modalText) {
        detailBtn.addEventListener('click', () => {
            modalText.textContent = description.textContent;
            modal.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
});
