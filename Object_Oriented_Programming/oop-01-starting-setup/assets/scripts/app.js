const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            price: 19.99,
            description: 'A soft pillow!',
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            price: 99.99,
            description: 'A carpet which you might like - or not.',
        },
    ],

    render() {
        const renderHook = document.getElementById('app');
        // Create an element
        const prodList = document.createElement('ul');
        // Add a class
        prodList.className = 'product-list';
        // Render a single product
        for (const prod of this.products) {
            // Every element needs to be appended to the parent (ul)
            const prodEl = document.createElement('li');
            // Create a class
            prodEl.className = 'product-item';
            // Output some contents about the products
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            // Append the element to the parent
            prodList.append(prodEl);
        }

        renderHook.append(prodList);
    }
};

productList.render();