"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cartData = document.getElementById('data');
const totalprice = document.getElementById('totalPrice');
const home = document.getElementById('home');
const cartTotal = document.getElementById('cartTotal');
const loadermain = document.getElementById('loader');
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let cartCounter = 0;
function getProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://dummyjson.com/products`);
        const data = yield response.json();
        return data;
    });
}
function add() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield getProduct();
            const index = cart.findIndex(e => e.id === product.id);
            if (index !== -1) {
                cart[index].quantity++;
                cart[index].price += product.mainPrice;
            }
            else {
                let obj = {
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
            updateCartCount(1);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loadermain.style.display = 'none';
        }
    });
}
function updateCartCount(change) {
    cartCounter += change;
    cartTotal.textContent = cartCounter.toString();
}
function displayCart() {
    const updatedcart = cart.filter(item => item.quantity > 0 && item.price > 0);
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
    const totalPrice = updatedcart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalprice.textContent = `Total Price: $${totalPrice}`;
    localStorage.setItem("cart", JSON.stringify(updatedcart));
}
home.addEventListener('click', () => {
    location.href = 'list.html';
});
function removeCart(index) {
    cart[index].quantity = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount(-1);
}
function addQ(index) {
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
function subQ(index) {
    if (cart[index].quantity > 0) {
        cart[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}
add();
displayCart();
