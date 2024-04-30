

const logOut = document.getElementById('logout') as HTMLButtonElement;
const main = document.getElementById('data') as HTMLDivElement;
const loader = document.getElementById('loader') as HTMLDivElement;
const limit = document.getElementById('limit') as HTMLSelectElement;
const filter = document.getElementById('filter') as HTMLSelectElement;
const searchData = document.getElementById('search') as HTMLInputElement;
const category = document.getElementById('category') as HTMLSelectElement;

interface Product {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    rating: number;
    description: string;
}
const allDataApi: string = "https://dummyjson.com/products";
async function fetchData(api: string = allDataApi): Promise<{ products: Product[] }> {
    const limitValue = limit.value;

    let url;
    if (limitValue !== ' ') {
        url = `https://dummyjson.com/products?limit=${limitValue}`;
    } else {
        url = allDataApi;
    }
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

async function processData(api: string = allDataApi, searchData: Product[] | null = null): Promise<void> {
    try {
        const response = await fetchData(api);
        let orderby: Product[];
        let filterData = filter.value.trim();

        if (filterData === 'DESC') {
            orderby = response.products.reverse();
        } else {
            orderby = response.products;
        }

        if (searchData != null) {
            orderby = searchData;
        }

        if (typeof orderby === 'object') {
            main.innerHTML = '';
            orderby.forEach((product: Product) => {
                main.innerHTML +=
                    `<div id="box">
                        <div id='complete' onclick='showProduct(${product.id})'>
                            <img src='${product.thumbnail}'>
                            <p id='content'><strong>${product.title}</strong></p> 
                        </div>
                    </div>`;
            });
        }
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
}
processData();

async function searchProduct(): Promise<void> {
    try {
        const result = await fetchData(allDataApi);

        let filterData = result.products.filter(
            ele => ele.title.toLowerCase().includes(searchData.value.toLowerCase())
        );
        loader.style.display = 'block';

        processData(allDataApi, filterData);;
    } catch (error) {
        console.error(error);
    }
}
searchData.addEventListener('input', searchProduct);
category.addEventListener('change', function () {
    {
        try {
            loader.style.display = 'block';
            let filterUrl: string;
            if (category.value !== 'all') {
                filterUrl = `https://dummyjson.com/products/category/${category.value}`;
                console.log(filterUrl);
            } else {
                filterUrl = allDataApi;
            }
            processData(filterUrl);
        } catch (error) {
            console.error(error);
        } finally {
            loader.style.display = 'none';
        }
    }
})

function showProduct(productId: number): void {
    location.href = `details.html?id=${productId}`
}

logOut.addEventListener('click', function (): void {
    alert('Are you sure..!!');
    location.href = 'login.html';
});

function showCartLength(): void {
    const cartTotal = document.getElementById('cartTotal') as HTMLSpanElement;
    const cartLength = JSON.parse(localStorage.getItem('cart') || '[]').length;
    cartTotal.textContent = cartLength.toString();
}

showCartLength();


