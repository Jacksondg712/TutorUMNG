document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    const redirectButton = document.getElementById('redirectButton');

    containers.forEach(container => {
        container.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                resetButtons(container);
                e.target.classList.add('pressed');
                checkIfAllContainersHavePressedButton();
            }
        });
    });

    function resetButtons(container) {
        container.querySelectorAll('button').forEach(button => {
        button.classList.remove('pressed');
        });
    }

    function checkIfAllContainersHavePressedButton() {
        const allContainersHavePressedButton = Array.from(containers).every(container => 
            Array.from(container.querySelectorAll('button')).some(button => 
                button.classList.contains('pressed')
            )
        );

        if (allContainersHavePressedButton) {
            redirectButton.disabled = false;
            redirectButton.style.backgroundColor = "#970292";
            redirectButton.style.color = "white";
        } else {
            redirectButton.disabled = true;
            redirectButton.style.backgroundColor = "#9d9c9c";
            redirectButton.style.color = "black";
        }
    }

    redirectButton.addEventListener('click', () => {
        if (redirectButton.disabled === false) {
            window.location.href = 'clases.html';
        }
    });

    redirectButton.disabled = true; // 
});
