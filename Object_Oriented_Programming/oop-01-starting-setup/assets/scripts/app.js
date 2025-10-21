// Create a class
class Product {

    // fields
    title;
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

}

class ProductItem {

    constructor(product) {
        this.product = product;
    }

    // Render single item (element) - return the single element
    render() {
        // Every element needs to be appended to the parent (ul)
        const prodEl = document.createElement('li');
        // Create a class
        prodEl.className = 'product-item';
        // Output some contents about the products
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
        // Add the add to card button
        const addCardButton = prodEl.querySelector('button');
        // Add an event listener
        addCardButton.addEventListener('click', () => {
            // Solution for the problem of this.addToCard  -
            // * the problem is that the 'this' keyword is not pointing to the ProductList class anymore (pointing to the button).
            console.log('Adding product to cart...');
            console.log(this.product);
        });

        // Return the single element (li)
        return prodEl;
    }
}

class ProductList {
    // Default products items
    products = [
        new Product
        (
            'A Pillow',
            'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            19.99,
            'A soft pillow!',
        ),
        new Product(
            'A Carpet',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            99.99,
            'A carpet which you might like - or not.',
        )
    ]

    render() {
        const renderHook = document.getElementById('app');
        // Create an element
        const prodList = document.createElement('ul');
        // Add a class
        prodList.className = 'product-list';
        // Render a single product
        for (const prod of this.products) {
            // Create the class that render the single item
            const prodEl = new ProductItem(prod)
            // Append the element to the parent
            prodList.append(prodEl.render());
        }

        renderHook.append(prodList);
    }

}

const productList = new ProductList();
productList.render();