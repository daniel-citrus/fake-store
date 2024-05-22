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
        const container = buildProductDisplay('All Products', res);
        document.getElementById('main-container').appendChild(container);
    });
});

function buildProductDisplay(title, products) {
    const container = document.createElement('div');
    container.classList.add(
        'row',
        'row-cols-1',
        'row-cols-sm-2',
        'row-cols-md-3',
        'row-cols-lg-4',
        'row-gap-4'
    );

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
            <a href='#'>
                <div class='card-body d-flex flex-column h-100 ratio-1x1'>
                    <img  class='img-fluid img-thumblnail align-self-center' src='${image}' alt='${description}'>
                    <p class='h-25 card-text fw-semibold'>${title}</p>
                    <p class='card-text price'>$${price}</p>
                    <button type="button" class="btn btn-primary mt-auto">Add to Cart</button>
                </div>
            </a>
        </div>
    `;

    return card;
}
