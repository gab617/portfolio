const formulario = document.getElementById('contact-form');

fetch ("https://dota2-6174.onrender.com/api/ping")
.then (res => res.status)
.then (status => console.log(status))

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(formulario);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('DATA DESDE FRONT ',data)
    try {
        const response = await fetch('http://localhost:3001/guardar-datos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Datos enviados');
            console.log(response.status)
            formulario.reset();
        } else {
            console.error('Error al enviar los datos al servidor.');
        }
    } catch (error) {
        console.error('Error de red: :DDDDDD', error);
    }
});



