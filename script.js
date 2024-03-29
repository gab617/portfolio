/* fetch("http://localhost:8080/usuarios")
    .then(res => res.json())
    .then(json = console.log(json))
    .catch(console.log('error')) */

/* Pingsa servidor donde se alojan los proyectos que se muestran */
const URLSRNDER = ["https://dota2-6174.onrender.com/api/ping", "https://giphy617.onrender.com/ping", "https://portf-617-express.onrender.com/ping"]

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loaders = document.querySelectorAll(".loader");
    // Función para cargar un proyecto
    function cargarProyecto(proyectoIndex) {
        return fetch(`${URLSRNDER[proyectoIndex]}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                return response;
            })
            .then((response) => response)
            .then(res => res.status)
            .then(() => {
                loaders[proyectoIndex].style.display = "none";
                console.log(`ping-render-work ${URLSRNDER[proyectoIndex]}`)
            })
            .catch((e) => {
                console.error(e, "ERROR")
                loaders[proyectoIndex].style.display = "block"
            })
    }

    const promesas = [0, 1, 2].map((proyectoIndex) => cargarProyecto(proyectoIndex))

})


const formulario = document.getElementById('contact-form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

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






