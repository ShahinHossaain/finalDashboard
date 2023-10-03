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
const sideNaveContent = document.querySelectorAll('.sideNaveContent')
const sideNavList = document.querySelectorAll('.sideNavList')
const closeSideActive = document.querySelectorAll('.closeSideActive')

console.log("closeSideActive  ", closeSideActive.forEach(e => console.log(e.innerText)))


sideNavList.forEach(element => {
    element.addEventListener('click', () => {
        setTimeout(() => {
            // console.log(element.childNodes[3].childNodes.classList.contains('active'));
            let status = true;
            element.childNodes[3].childNodes.forEach((element, index) => {
                if (index % 2 !== 0) {
                    if (element.classList.contains('active')) {
                        status = false;
                    }
                };
            })

            element.childNodes[3].classList.contains('show') ? element.classList.add('active') : status && element.classList.remove('active');

        }, 360);
        pp();
    });
});

const pp = () => {
    navTitle.forEach(e => {
        e.parentElement.classList.remove('active');
        if (!e.classList.contains('show')) {
            e.classList.remove('show')
        }
        e.parentNode.classList.contains('superActive') ? e.parentNode.classList.add('active') : e.parentNode.classList.remove('active')
    })
}

const setActiveSideNaveContent = (iconName) => {
    closeSideActive.forEach(e => e.innerText === iconName ? e.parentNode.classList.add('active') : e.parentNode.classList.remove('active'))
}

navTitle.forEach(element => {
    element.addEventListener('click', () => {
        // navTitle.forEach(e => {
        //     e.parentElement.classList.remove('active');
        //     if (!e.classList.contains('show')) {
        //     e.classList.remove('show')
        //     console.log(e.parentNode)
        //     }
        // })
        pp()

        element.classList.add('show')
        console.log('element', element)
        element.classList.contains('show') ? element.parentElement.classList.add('active', 'superActive') : element.parentElement.classList.remove('active');

        navActiveContent.childNodes.forEach((e, i) => {
            if (i % 2 !== 0) {
                e !== element.parentNode && e.classList.remove('superActive')
                e !== element.parentNode && console.log('222', e)
            }
        })

        setActiveSideNaveContent(element.parentNode.childNodes[1].childNodes[1].innerText)

        // i % 2 !== 0 && console.log('333', e))
        // if(i % 2 !== 0){
        //     e !== element && console.log('333', e)
        // }
        // console.log('eee', navActiveContent.childNodes)

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





