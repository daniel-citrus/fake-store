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
    card.classList.add('product', 'col');
    card.title = description;

    card.innerHTML = `
        <div class='card h-100'>
            <a href='#' class='h-100'>
                <div class='card-body d-flex flex-column h-100'>
                    <img  class='img-fluid align-self-center mb-3' src='${image}' alt='${description}'>
                    <p class='h-25 card-text fw-semibold'>${title}</p>
                    <p class='card-text price'>$${price}</p>
                    <button type="button" class="btn btn-primary mt-auto">Add to Cart</button>
                </div>
            </a>
        </div>
    `;

    return card;
}
