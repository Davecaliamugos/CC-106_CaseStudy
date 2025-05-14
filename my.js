        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', !expanded);
        });

        // Close menu when a nav link is clicked (on mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 700) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', false);
                }
            });
        });

  // Wait for the DOM to load

  document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the product name from the closest .box
        const productBox = button.closest('.box');
        const productName = productBox.querySelector('h3').textContent.trim();

        alert(`Thank you for buying ${productName}!`);
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.shop-btn'); // Select all the buttons with 'buy-btn' class
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevents default behavior (like navigating to another page)
            
            // Get the product name (from the parent element of the button)
            const productName = button.parentElement.querySelector('h3').innerText;
            alert(`Thank you for buying ${productName}!`);
        });
    });
});

