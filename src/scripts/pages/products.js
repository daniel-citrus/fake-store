async function getProducts(category, limit) {
    try {
        let data = await fetch('https://fakestoreapi.com/products');
        data = await data.json();
        return data;
    } catch (e) {
        // Oops, something went wrong!
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getProducts().then((res) => {
        const container = buildProductDisplay('all products', res);
        document.getElementById('main-container').appendChild(container);
    });
});

function buildProductDisplay(title, products) {
    const container = document.createElement('div');
    container.classList.add('products', 'row', 'row-cols-4', 'row-gap-4');

    products.forEach((product) => {
        container.appendChild(buildProductCard(product));
    });

    return container;
}

function buildProductCard(product) {
    const {
        category = '',
        description = '',
        id = '',
        image = '',
        price = '',
        rating = '',
        title = '',
    } = product;

    const card = document.createElement('div');
    card.classList.add('product', 'card', 'col');
    card.title = description;

    card.innerHTML = `
            <img  class='card-img-top img-fluid' src='${image}' alt='${description}'>
            <div class='card-body d-flex flex-column'>
                <a href='#'>
                    <p class='card-text text-truncate'>${description}</p>
                </a>
                <p class='card-text'>$${price}</p>
                <button type="button" class="btn btn-primary mt-auto">Add to Cart</button>
            </div>
    `;

    return card;
}
