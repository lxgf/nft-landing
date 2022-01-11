let darkOverlay = document.querySelector('.dark-overlay');
let modalContainer = document.querySelector('.modal-container');
let jobsModal = document.querySelector('.jobs-modal');
let contactsModal = document.querySelector('.contacts-modal');

document.querySelector('.jobs-link').addEventListener('click', (e) => {
    if(darkOverlay.classList.contains('hidden')) {
    darkOverlay.classList.remove('hidden');
    }
    if(modalContainer.classList.contains('hidden')) {
     modalContainer.classList.remove('hidden');
    };
    if(jobsModal.classList.contains('hidden')) {
    jobsModal.classList.remove('hidden');
    };
})

document.querySelector('.jobs-close').addEventListener('click', (e) => {
    if(!darkOverlay.classList.contains('hidden')) {
    darkOverlay.classList.add('hidden');
    }
    if(!modalContainer.classList.contains('hidden')) {
     modalContainer.classList.add('hidden');
    };
    if(!jobsModal.classList.contains('hidden')) {
    jobsModal.classList.add('hidden');
    };
})

document.querySelector('.contacts-link').addEventListener('click', (e) => {
    if(darkOverlay.classList.contains('hidden')) {
    darkOverlay.classList.remove('hidden');
    }
    if(modalContainer.classList.contains('hidden')) {
     modalContainer.classList.remove('hidden');
    };
    if(contactsModal.classList.contains('hidden')) {
    contactsModal.classList.remove('hidden');
    };
})

document.querySelector('.contacts-close').addEventListener('click', (e) => {
    if(!darkOverlay.classList.contains('hidden')) {
    darkOverlay.classList.add('hidden');
    }
    if(!modalContainer.classList.contains('hidden')) {
     modalContainer.classList.add('hidden');
    };
    if(!contactsModal.classList.contains('hidden')) {
    contactsModal.classList.add('hidden');
    };
})