function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
        Name: formData.get('Name'),
        Email: formData.get('Email'),
        Message: formData.get('Message')
    };

    fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert('Message sent successfully!');
        form.reset();
    })
    .catch(error => {
        alert('Error sending message. Please try again.');
        console.error(error);
    });
});