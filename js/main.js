document.addEventListener('DOMContentLoaded', () => {
    const writeButton = document.getElementById('writeButton');
    const writeButtonLink = document.getElementById('writeButtonLink');

    writeButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action

        // Add the slide-out class to body
        document.body.classList.add('slide-out');

        // Wait for the animation to complete
        setTimeout(() => {
            // Navigate to email.html after the animation
            window.location.href = writeButtonLink.href;
        }, 500); // Match the duration of the slide-out animation
    });
});
