interface CartItem {
    id: number;
    quantity: number;
    price: number;
    category: string;
    mainPrice: number;
    title: string;
    thumbnail: string;
}

const cartData = document.getElementById('data') as HTMLTableElement;
const totalprice = document.getElementById('totalPrice') as HTMLParagraphElement;
const loadermain = document.getElementById('loader') as HTMLDivElement;

let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

async function getProduct(): Promise<any> {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    return data;
}

async function add(): Promise<void> {
    try {
        const product = await getProduct();

        const index = cart.findIndex(e => e.id === product.id);

        if (index !== -1) {
            cart[index].quantity++;
            cart[index].price += product.mainPrice;
        } else {
            let obj: CartItem = {
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                price: product.price,
                category: product.category,
                mainPrice: product.mainPrice,
                quantity: 1
            };
            cart.push(obj);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    } catch (error) {
        console.error(error);
    } finally {
        loadermain.style.display = 'none';
    }
}

function updateCartCount(): void {
    const cartTotal = document.getElementById('cartTotal') as HTMLSpanElement;
    let cartCounter: number = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(cartCounter.toString());
}

function displayCart(): void {
    const updatedcart: CartItem[] = cart.filter(item => item.quantity > 0 && item.price > 0);
    cartData.innerHTML = "";

    updatedcart.forEach((ele, index) => {
        cartData.innerHTML +=
            `<tr>
                <td>${ele.id}</td>
                <td><img src='${ele.thumbnail}'/></td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                <td>${ele.category}</td>
                <td><button onclick="subQ(${index})">-</button>${ele.quantity}
                <button onclick="addQ(${index})">+</button></td>
                <td>${ele.price * ele.quantity} </td>
                <td><button id='remove' onclick='removeCart(${index})'>Remove</button></td>
            </tr>`;
    });

    const totalPrice: number = updatedcart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalprice.textContent = `Total Price: $${totalPrice}`;
    localStorage.setItem("cart", JSON.stringify(updatedcart));
}

function removeCart(index: number): void {
    cart[index].quantity = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function addQ(index: number): void {
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function subQ(index: number): void {
    if (cart[index].quantity > 0) {
        cart[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

add();
displayCart();
