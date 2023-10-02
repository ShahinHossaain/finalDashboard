const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const miniBtn = document.getElementById('miniBtn');
const bodyOverlay = document.getElementsByClassName('body-overlay');
const sidebarCollapse = document.getElementById('sidebarCollapse')
const mainContent = document.getElementById('content-container');
const navInactiveContent = document.getElementById('navInactiveContent');
const navActiveContent = document.getElementById('navActiveContent');
const navTitle = document.querySelectorAll('.navTitle')
const child = document.querySelectorAll('.child')



navTitle.forEach(element => {
    element.addEventListener('click', () => {
        navTitle.forEach(e => {
            e.parentElement.classList.remove('active');
            // if (!e.classList.contains('show')) {
            e.classList.remove('show')
            // }
        })

        element.classList.add('show')

        element.parentElement.classList.add('active');
    })

    element.parentElement.addEventListener('click', (e) => {
        navTitle.forEach(e => {

            if (e !== element) e.classList.remove('show')
        })

        element.parentElement.classList.add('active')
    })
});

child.forEach(element => {
    element.addEventListener('click', () => {
        child.forEach(e => {
            e === element ? e.classList.add('active') : e.classList.remove('active');
        })
    })

})






let isSideMenuOpen = false;

const setIsSideMenuOpen = () => {
    isSideMenuOpen ? isSideMenuOpen = false : isSideMenuOpen = true;

}

// Add "inActive" class when hovering
sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.remove('inActive');
    content.classList.remove('active');
    !isSideMenuOpen && navInactiveContent.classList.add('d-none');
    !isSideMenuOpen && navActiveContent.classList.remove('d-none');
});

// Remove "inActive" class when not hovering
sidebar.addEventListener('mouseleave', () => {
    !isSideMenuOpen && sidebar.classList.add('inActive');
    !isSideMenuOpen && content.classList.add('active');
    !isSideMenuOpen && navActiveContent.classList.add('d-none');
    !isSideMenuOpen && navInactiveContent.classList.remove('d-none');
});

// small device sidebar control
miniBtn.addEventListener('click', () => {
    sidebar.classList.remove('inActive');
    // sidebar.classList.add('show-nav');
    navInactiveContent.classList.add('d-none');
    navActiveContent.classList.remove('d-none');
    bodyOverlay[0].classList.add('show-nav')
});

bodyOverlay[0].addEventListener('click', () => {
    bodyOverlay[0].classList.remove('show-nav')
    sidebar.classList.add('inActive');
});

sidebarCollapse.addEventListener('click', () => {
    if (!isSideMenuOpen) {
        sidebar.classList.remove('inActive');
        content.classList.remove('active');

        navInactiveContent.classList.add('d-none');
        navActiveContent.classList.remove('d-none');
        console.log('yes')
    }
    else {
        sidebar.classList.add('inActive');
        content.classList.add('active');

        navInactiveContent.classList.remove('d-none');
        navActiveContent.classList.add('d-none');
        console.log('no')
    }

    const arrow_ios = document.getElementById('arrow_ios');
    isSideMenuOpen ? arrow_ios.innerText = 'menu' : arrow_ios.innerText = 'menu_open'

    setIsSideMenuOpen()
})



