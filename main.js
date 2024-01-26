var typed = new Typed(".text", {
    strings: ['Final Year Student','Developer', 'Programmer', 'Coder', 'Database Designer'],
    typeSpeed: 17,
    backSpeed: 17,
    smartBackspace: true,
    backDelay: 1000,
    loop: true
})

// toggle icon scrollbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animaition on scroll
            sec.classList.add('show-animate')
        }
        
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate')
        }
        
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar links (Scroll)
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    // let footer = document.querySelector('footer');

    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY > document.scrollingElement.scrollHeight);

}

let darkIcon = document.querySelector('#brightMode');

let brightMode = () => {
    let body = document.querySelector('body');
    let root = document.querySelector(':root');
    let home = document.querySelector('.home');
    
    if (body.className == 'bright-mode') {
        body.classList.toggle('bright-mode');
        root.style.setProperty('--bg-color', '#081b29');
        root.style.setProperty('--text-color', '#ededed');
        root.style.setProperty('--second-bg-color', '#112e42');
        document.querySelector('.bxs-moon').className = 'bx bx-sun';
        home.style.background = 'url("bg.jpg")';
        exit();
    }
                    
    body.classList.toggle('bright-mode');
    root.style.setProperty('--bg-color', 'lightGrey');
    root.style.setProperty('--text-color', '#081b29');
    root.style.setProperty('--second-bg-color', '#ededed');
    document.querySelector('.bx-sun').className = 'bx bxs-moon';
    home.style.background = 'url("bg2.jpg")';
}