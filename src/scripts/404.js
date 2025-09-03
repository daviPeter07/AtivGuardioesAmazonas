document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('redirect-message');
    let timeLeft = 10;

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = '../index.html'; // Redireciona para a página inicial
        } else {
            countdownElement.textContent = `Você será redirecionado para a página inicial em ${timeLeft} segundos...`;
        }
        timeLeft -= 1;
    }, 1000); // 1000ms = 1 segundo
});