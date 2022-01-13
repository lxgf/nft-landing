let darkOverlay = document.querySelector('.dark-overlay');
let modalContainer = document.querySelector('.modal-container');
let jobsModal = document.querySelector('.jobs-modal');
let contactsModal = document.querySelector('.contacts-modal');

const addCloseListener = (closeBtnClass, modal) => {
    document.querySelector(closeBtnClass).addEventListener('click', e => {
        if(!darkOverlay.classList.contains('hidden'))
            darkOverlay.classList.add('hidden')
        if(!modalContainer.classList.contains('hidden'))
            modalContainer.classList.add('hidden')
        if(!modal.classList.contains('hidden'))
            modal.classList.add('hidden')
    })
}

addCloseListener('.jobs-close', jobsModal);
addCloseListener('.contacts-close', contactsModal);

const addLinkListener = (linkClass, modal) => {
    document.querySelector(linkClass).addEventListener('click', e => {
        if(darkOverlay.classList.contains('hidden'))
            darkOverlay.classList.remove('hidden')
        if(modalContainer.classList.contains('hidden'))
             modalContainer.classList.remove('hidden')
        if(modal.classList.contains('hidden'))
            modal.classList.remove('hidden')
    })
}

addLinkListener('.jobs-link', jobsModal);
addLinkListener('.contacts-link', contactsModal);

let showBtns = document.querySelectorAll('.jobs-modal__content__row__btn');

showBtns.forEach((showBtn) => {
    showBtn.addEventListener('click', e => {
        e.target.innerHTML = '+7 800 555 35 05';
    })
})

let buyBtn = document.querySelector('.buy-btn');

buyBtn.addEventListener('click', () => {
    console.log('there should be a transition to the catalog page))')
})

let scrollRow = document.querySelector('.bottom-row');

scrollRow.addEventListener('wheel', e => {
    e = e || window.event;
    let delta = e.deltaY;
    let preSLeft = scrollRow.scrollLeft;
    scrollRow.scrollLeft = preSLeft + delta * 3;
})