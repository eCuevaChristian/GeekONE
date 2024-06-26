document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const productList = document.querySelector('.product-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.elements['name'].value;
        const price = form.elements['price'].value;
        const image = form.elements['image'].value;

        if (name && price && image) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${image}" alt="${name}">
                <p>${name}</p>
                <p>$${price}</p>
                <button class="delete-btn">🗑️</button>
            `;

            productList.appendChild(productCard);

            productCard.querySelector('.delete-btn').addEventListener('click', () => {
                productCard.remove();
            });

            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.parentElement.remove();
        });
    });
});
