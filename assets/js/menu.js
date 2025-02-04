const glider = document.querySelector('.glider');
const inputs = document.querySelectorAll('input[type="radio"]');
const header = document.getElementById('header'); // Supondo que o menu tenha esse ID
let current = 0;

// Função de animação do menu
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', () => {
        if (current === i) return;

        if (current < i) { // Animação para a direita
            document.body.style.setProperty('--diff', i - current + 1);
            document.body.style.setProperty('--right', `${200 * current}px`);
            glider.style.animation = "right .5s cubic-bezier(0, 1.31, 1, 1.01)";
        } else { // Animação para a esquerda
            document.body.style.setProperty('--diff', current - i + 1);
            glider.style.animation = "left 0.5s cubic-bezier(0, 1.31, 1, 1.01)";
        }

        // Resetando a animação após 500ms
        setTimeout(() => {
            glider.style.animation = '';
        }, 500);

        current = i;
    });
}

// Adicionar rolagem suave ao clicar no menu
const menuLabels = document.querySelectorAll('.tab');
menuLabels.forEach((label, index) => {
    label.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Disparar animação do glider
        inputs[index].click();

        let targetId = '';

        // Define a seção de destino conforme o item clicado
        if (index === 0) {
            targetId = '#home'; // Seção Início
        } else if (index === 1) {
            targetId = '#sobre'; // Seção Sobre
        } else if (index === 2) {
            targetId = '#skills'; // Seção Skills
        } else if (index === 3) {
            targetId = '#portfolio'; // Seção Portfólio
        } else if (index === 4) {
            targetId = '#contato'; // Seção Contato
        }

        const targetElement = document.querySelector(targetId);

        // Rolar suavemente para a seção
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Sequência inicial ao carregar a página (anima a transição entre os rádios)
window.onload = () => {
    let sequence = [0, 1, 2, 3, 4, 0]; // Adiciona retorno ao início
    let delay = 0;

    sequence.forEach((index, idx) => {
        setTimeout(() => {
            inputs[index].click();
            // Caso seja o último índice, reseta para o início
            if (idx === sequence.length - 1) {
                current = 0;
            }
        }, delay);
        delay += 1000; // Incrementa o atraso para cada clique
    });
};

// Menu fixo durante o scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});
