document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchBar = document.getElementById('search-bar');
    const jobContainer = document.getElementById('job-container');
    
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const jobs = jobContainer.getElementsByClassName('job');

        Array.from(jobs).forEach(job => {
            const title = job.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                job.style.display = '';
            } else {
                job.style.display = 'none';
            }
        });
    });

    // Job Application Form Validation
    const form = document.querySelector('#job-application-form');
    const modal = document.getElementById('success-modal');
    const closeModalButton = document.getElementById('close-modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting for validation

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const resume = document.getElementById('resume').value;

        // Validate Name
        if (name === '') {
            alert('Please enter your full name.');
            return;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate Phone Number (10-digit format)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Validate Resume Upload
        if (resume === '') {
            alert('Please upload your resume.');
            return;
        }

        // If all validation passes, show modal
        modal.style.display = 'block'; // Show the modal
        form.reset(); // Reset the form after successful submission
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});
