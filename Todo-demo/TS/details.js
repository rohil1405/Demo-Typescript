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
const loaderMain = document.getElementById('loader');
const data = document.getElementById('data');
function oneProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://dummyjson.com/products/${productId}`);
        const data = res.json();
        return data;
    });
}
function infoProduct(products) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        try {
            if (productId === null) {
                console.error('Product ID is missing in URL');
                return;
            }
            else {
                const ele = yield oneProduct(productId);
                data.innerHTML += `
            <div id='header'>
                <h2>${ele.title}</h2>
                <img src='${ele.thumbnail}'/>
                <h2>Price: $${ele.price}</h2>
                <hr>
                <h4>${ele.description}</h4>
                <p><strong>Category:</strong> ${ele.category}</p>
                <p><strong>Brand:</strong> ${ele.brand}</p>
                <p><strong>Rating:</strong> ${ele.rating}</p>
                <p><strong>DP:</strong> ${ele.discountPercentage}%</p>
            </div>
            <div id='footer'>
                <button id='home' onclick='goback()'>GoBack</button>
                <button id='addtocart' onclick='addtocart()'>Add to Cart</button>
            </div>`;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loaderMain.style.display = 'none';
        }
    });
}
function goback() {
    location.href = 'list.html';
}
function addtocart() {
    location.href = `list.html`;
    add();
    updateCartCount();
}
infoProduct();
