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
const allDataApi = "https://dummyjson.com/products";
function fetchData() {
    return __awaiter(this, arguments, void 0, function* (api = allDataApi) {
        const limitValue = limit.value;
        let url;
        if (limitValue !== ' ') {
            url = `https://dummyjson.com/products?limit=${limitValue}`;
        }
        else {
            url = allDataApi;
        }
        const response = yield fetch(api);
        const data = yield response.json();
        return data;
    });
}
function processData() {
    return __awaiter(this, arguments, void 0, function* (api = allDataApi, searchData = null) {
        try {
            const response = yield fetchData(api);
            let orderby;
            let filterData = filter.value.trim();
            if (filterData === 'DESC') {
                orderby = response.products.reverse();
            }
            else {
                orderby = response.products;
            }
            if (searchData != null) {
                orderby = searchData;
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
            const result = yield fetchData(allDataApi);
            let filterData = result.products.filter(ele => ele.title.toLowerCase().includes(searchData.value.toLowerCase()));
            loader.style.display = 'block';
            processData(allDataApi, filterData);
            ;
        }
        catch (error) {
            console.error(error);
        }
    });
}
searchData.addEventListener('input', searchProduct);
category.addEventListener('change', function () {
    {
        try {
            loader.style.display = 'block';
            let filterUrl;
            if (category.value !== 'all') {
                filterUrl = `https://dummyjson.com/products/category/${category.value}`;
                console.log(filterUrl);
            }
            else {
                filterUrl = allDataApi;
            }
            processData(filterUrl);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loader.style.display = 'none';
        }
    }
});
function showProduct(productId) {
    location.href = `details.html?id=${productId}`;
}
logOut.addEventListener('click', function () {
    alert('Are you sure..!!');
    location.href = 'login.html';
});
function showCartLength() {
    const cartTotal = document.getElementById('cartTotal');
    const cartLength = JSON.parse(localStorage.getItem('cart') || '[]').length;
    cartTotal.textContent = cartLength.toString();
}
showCartLength();
