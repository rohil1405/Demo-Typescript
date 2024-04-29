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
const logOut = document.getElementById('logout');
const main = document.getElementById('data');
const loader = document.getElementById('loader');
const limit = document.getElementById('limit');
const filter = document.getElementById('filter');
const searchData = document.getElementById('search');
const category = document.getElementById('category');
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const limitValue = limit.value;
        let url;
        if (limitValue !== ' ') {
            url = `https://dummyjson.com/products?limit=${limitValue}`;
        }
        else {
            url = `https://dummyjson.com/products`;
        }
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
function processData(products) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetchData();
            let orderby;
            let filterData = filter.value.trim();
            if (filterData === 'DESC') {
                orderby = response.products.reverse();
            }
            else {
                orderby = response.products;
            }
            if (typeof orderby === 'object') {
                main.innerHTML = '';
                orderby.forEach((product) => {
                    main.innerHTML +=
                        `<div id="box">
                        <div id='complete' onclick='showProduct(${product.id})'>
                            <img src='${product.thumbnail}'>
                            <p id='content'><strong>${product.title}</strong></p> 
                        </div>
                    </div>`;
                });
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loader.style.display = 'none';
        }
    });
}
processData();
function searchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetchData();
            const filterData = searchData.value.toLowerCase();
            const search = result.products.filter((product) => product.title.toLowerCase().includes(filterData));
            processData(search);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function categoryData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            loader.style.display = 'block';
            const categoryProduct = category.value.toLowerCase();
            const data = yield fetch(`https://dummyjson.com/products/category/${categoryProduct}`);
            const result = yield data.json();
            processData(result.products);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loader.style.display = 'none';
        }
    });
}
searchData.addEventListener('input', searchProduct);
category.addEventListener('change', categoryData);
function showProduct(productId) {
    location.href = `details.html?id=${productId}`;
}
logOut.addEventListener('click', function () {
    alert('Are you sure..!!');
    location.href = 'login.html';
});
