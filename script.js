document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const firstName = form.elements['first-name'].value.trim();
        const lastName = form.elements['last-name'].value.trim();
        const email = form.elements['email'].value.trim();
        const queryType = form.querySelector('input[name="query-type"]:checked');
        const message = form.elements['message'].value.trim();
        const confirmation = form.elements['confirmation'].checked;

        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        let errorMessage = '';

        // Check for empty email
        if (email === '') {
            errorMessage = 'Please enter an email address.';
        }
        // Check for spaces in email
        else if (email.indexOf(' ') !== -1) {
            errorMessage = 'Email address cannot contain spaces.';
        }
        // Check for incomplete email format (missing @ or domain)
        else if (!emailRegex.test(email)) {
            errorMessage = 'Please enter a valid email address.';
        }

        // Display error message if there's an error
        if (errorMessage !== '') {
            popup.textContent = errorMessage;
            popup.style.display = 'block';
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000); // Hide popup after 3 seconds
            return; // Exit function if email validation fails
        }

        // Check other required fields
        if (firstName === '' || lastName === '' || !queryType || message === '' || !confirmation) {
            popup.textContent = 'Please fill out all required fields and consent to being contacted by the team.';
            popup.style.display = 'block';
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000); // Hide popup after 3 seconds
            return; // Exit function if other validations fail
        }

        // Simulate submission process (in a real scenario, this would be an AJAX request)
        setTimeout(function() {
            popup.textContent = 'Form submitted successfully!';
            popup.style.display = 'block';

            // Reset form after submission (optional)
            form.reset();

            // Hide popup after 3 seconds
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000);
        }, 1000); // Simulating a delay of 1 second (1000 ms) for demonstration
    });

    // Additional input event listener to validate email on input
    form.elements['email'].addEventListener('input', function() {
        const email = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errorMessage = '';

        // Check for empty email
        if (email === '') {
            errorMessage = 'Please enter an email address.';
        }
        // Check for spaces in email
        else if (email.indexOf(' ') !== -1) {
            errorMessage = 'Email address cannot contain spaces.';
        }
        // Check for incomplete email format (missing @ or domain)
        else if (!emailRegex.test(email)) {
            errorMessage = 'Please enter a valid email address.';
        }

        // Display or hide error message
        if (errorMessage !== '') {
            popup.textContent = errorMessage;
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });
});
