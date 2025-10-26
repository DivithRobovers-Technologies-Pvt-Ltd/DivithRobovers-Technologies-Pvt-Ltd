document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-content');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');

    // Function to handle page switching
    function switchPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });

        // Show the target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }

        // Update active class on all nav links (desktop and mobile)
        navLinks.forEach(navLink => {
            navLink.classList.remove('active', 'text-blue-600', 'font-bold');
            if(navLink.getAttribute('data-page') === pageId) {
                navLink.classList.add('active', 'text-blue-600', 'font-bold');
            } else {
                // Ensure non-active links have standard text color
                navLink.classList.add('text-gray-600');
            }
        });

        // Close mobile menu
        mobileMenu.classList.add('hidden');

        // Scroll to top of window
        window.scrollTo(0, 0);
    }

    // Add click listener to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop default link behavior
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                switchPage(pageId);
            }
        });
    });

    // Add mobile menu toggle
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});
