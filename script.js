const formulario = document.getElementById('contact-form');
/* Pings a servidor donde se alojan los proyectos que se muestran */
fetch("https://dota2-6174.onrender.com/api/ping")
    .then(res => res.status)
    .then(status => console.log(status, 'Dota2'))

fetch("https://giphy617.onrender.com/ping,")
    .then(res => res.status)
    .then(status => console.log(status, ' giphy'))

fetch("https://portf-617-express.onrender.com/ping")
    .then(res => res.status)
    .then(status => console.log(status, ' form-mail'))

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    /*     const formData = new FormData(formulario);
        const data = {};
    
            formData.forEach((value, key) => {
            data[key] = value;
        });
     */
    console.log('RECIBIENDO')
    const name = document.getElementById('name').value
    const addresse = document.getElementById('addresse').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const formData = {
        name: name,
        addresse: addresse,
        subject: subject,
        message: message
    };

    console.log('DATA DESDE FRONT ', formData)

    try {
        fetch('https://portf-617-express.onrender.com/enviar-correo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data); // Muestra la respuesta del servidor (éxito o error)
            })
            .catch((error) => {
                console.error(error);
            });
    } catch {
        console.error('Error en try, error')
    }
    formulario.reset()
});



