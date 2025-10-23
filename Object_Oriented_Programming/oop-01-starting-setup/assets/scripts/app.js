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

class ElementAttribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}


// Output different components
class Component {

    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    // attributes parameter - full of objects
    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);

        if (cssClasses) {
            rootElement.className = cssClasses;
        }

        if (attributes && attributes.length > 0) {

            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        // Get element and append the root element (element we want to add)
        document.getElementById(this.hookId).append(rootElement);

        // Return the root element
        return rootElement;

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
            App.addToProductToCart(this.product);
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

        return prodList;
    }

}

// Add another class (Shopping Cart)
class ShoppingCart extends Component{
    // Items field
    items = [];

    constructor(renderHook) {
        super(renderHook);
    }


    // Create a getters and setters

    // Set new cart items (recalculate the total amount)
    set cartItems(cartProducts) {
        this.items = cartProducts;
        // Update the HTML content here not the value stored in total output (this.totalOutput)
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
    get totalAmount() {
        // Use the reduce function
        const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        // Return the total sum
        return sum;
    }

    addProduct(product) {
        // Create a copy of the items
        const updatedItems = [...this.items];
        // Add the product to the items
        updatedItems.push(product);
        // Update the cart items (using set)
        this.cartItems = updatedItems;
    }

    render() {
        // Use the method we created in our parent class
        const cartEl = this.createRootElement('section', 'cart');

        const renderHook = document.getElementById('app');
        // Create an element (section)
        // const cartEl = document.createElement('section');
        // Add a class
        // cartEl.className = 'cart';
        // Output some contents about the products
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2> 
            <button>Order Now!</button>
            `;
        // Add the add to card button
        const orderButton = cartEl.querySelector('button');
        // Add an event listener

        // Dynamically add a property to a class using the 'this' keyword
        this.totalOutput = cartEl.querySelector('h2');
    }
}

// Class that combine cart and product list
class Shop {
    render() {
        const renderHook = document.getElementById('app');

        // Store in a property (refactor)
        this.cart = new ShoppingCart('app');
        // Get the cart element
        this.cart.render();
        const productList = new ProductList();
        // Get the product list element
        const prodListEl = productList.render();

        renderHook.append(prodListEl);
    }
}

class App {

    static cart;

    // Create a static methods
    static init() {
        // Create an instance
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    // add another static method
    static addToProductToCart(product) {
        this.cart.addProduct(product);
    }
}

// Create the class that communicates to other classes (using the static class we created)
App.init();