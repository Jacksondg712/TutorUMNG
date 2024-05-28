document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('password', document.getElementById('password').value);
    alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});

function handleButtonClick(buttonNumber) {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    if (buttonNumber === 1) {
        btn1.classList.add('pressed');
        btn2.classList.remove('pressed');
    } else {
        btn2.classList.add('pressed');
        btn1.classList.remove('pressed');
    }
}