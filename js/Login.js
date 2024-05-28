document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    if (email === storedEmail && password === storedPassword) {
        window.location.href = 'miPerfil.html';
    } else {
        alert('El correo electrónico o la contraseña son incorrectos.');
    }
});