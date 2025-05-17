// Navigation-related functions

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('../index.html')) { // Corrected path
        autoLogin();
    }

    if (document.getElementById('user-display')) {
        displayLoggedInUser();
    }
});

function displayLoggedInUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const username = currentUser.replace('user_', '');
        const userDisplayElement = document.getElementById('user-display');
        if (userDisplayElement) {
            userDisplayElement.textContent = `שלום, ${username}!`;
        }
    }
}

// Expose functions globally
window.displayLoggedInUser = displayLoggedInUser;
