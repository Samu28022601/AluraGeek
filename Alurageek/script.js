// Fetch products from a dummy API and display them
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const productsContainer = document.getElementById('productsContainer');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;
            productsContainer.appendChild(productItem);
        });
    })
    .catch(error => console.error('Error fetching products:', error));

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h3>${productName}</h3>
        <p>$${productPrice}</p>
    `;

    document.getElementById('productsContainer').appendChild(productItem);

    // Clear the form
    document.getElementById('productForm').reset();
});
