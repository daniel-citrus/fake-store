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
    getProducts().then((val) => {
        console.log(val);
    });
});
