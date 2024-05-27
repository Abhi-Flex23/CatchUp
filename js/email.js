document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const backButtonLink = document.getElementById('backButtonLink');

    backButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action

        // Add the slide-out class to body
        document.body.classList.add('slide-out');

        // Wait for the animation to complete
        setTimeout(() => {
            // Navigate to index.html after the animation
            window.location.href = backButtonLink.href;
        }, 500); // Match the duration of the slide-out animation
    });
});
