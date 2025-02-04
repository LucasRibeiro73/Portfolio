document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('http://localhost:5500/send-email', {
            method: 'POST',
            body: JSON.stringify({
                user_name: formData.get('user_name'),
                user_phone: formData.get('user_phone'),
                user_email: formData.get('user_email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(result => {
            successMessage.textContent = result;
            successMessage.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});
