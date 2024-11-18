document.addEventListener('DOMContentLoaded', () => {
    // Function to highlight the active section in the navbar
    function highlightActiveSection() {
        const sections = document.querySelectorAll('main section');
        const navbarLinks = document.querySelectorAll('#navbar a');

        window.addEventListener('scroll', () => {
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    // Remove 'active' class from all links
                    navbarLinks.forEach((link) => {
                        link.classList.remove('active');
                    });
                    // Add 'active' class to the corresponding link
                    navbarLinks[index].classList.add('active');
                }
            });
        });
    }

    // Function to make the navbar sticky when scrolling
    function makeNavbarSticky() {
        const navbar = document.getElementById('navbar');
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const headerRect = header.getBoundingClientRect();
            if (headerRect.top <= 0) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // Function to create navigation links dynamically
    function createNavigation() {
        const navBar = document.querySelector('#navbar');
        const sections = document.querySelectorAll('main section');

        sections.forEach((section) => {
            const sectionId = section.id;
            const sectionTitle = section.getAttribute('data-nav');

            if (sectionId && sectionTitle) {
                const navElement = document.createElement('li');
                navElement.innerHTML = `<a href="#${sectionId}">${sectionTitle}</a>`;
                navBar.appendChild(navElement);
            }
        });
    }

    // Function to enable smooth scrolling for navigation links
    function smoothScrolling() {
        const navbarLinks = document.querySelectorAll('#navbar a');

        navbarLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetSectionId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetSectionId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Call the functions to set up the page
    createNavigation();
    highlightActiveSection();
    makeNavbarSticky();
    smoothScrolling();
});
