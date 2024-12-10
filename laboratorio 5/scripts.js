document.getElementById('contactform').addEventListener('submit', function(event) {
    const name = document.getElementById('name').Value.trim();
    const reason = document.getElementById('reason').Value.trim();
    const email = document.getElementById('email').Value.trim();

    if (!name || !reason || !email) {
        alert('por favor, complete todos los campos');
        event.preventDefault();
    } else {
        alert('formulario enviado corectamente.');
    }

});