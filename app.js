const navList = document.getElementById('navList');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

// event listeners

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);


window.addEventListener('load', function () {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
});


// functions 

function openMobileMenu() {
    navList.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';

}

function closeMobileMenu() {
    navList.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';

}


function resetDesktop() {
    navList.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'none';
}

function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        resetDesktop();
    } else {
        closeMobileMenu();
    }
}