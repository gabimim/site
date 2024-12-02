document.querySelectorAll('a[href^"#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollintoview({
          behavior:'smooth'
       });
    
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        // Aqui você pode enviar os dados para um servidor ou processar localmente
        // Simulando uma resposta de sucesso
        responseMessage.textContent = 'Obrigado por sua avaliação, ' + name + '! Sua opinião é muito importante para nós.';
        responseMessage.style.color = 'green';

        // Limpa o formulário
        form.reset();
    });
});
