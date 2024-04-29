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

async function fetchData(): Promise<{ products: Product[] }> {
    const limitValue = limit.value;

    let url;
    if (limitValue !== ' ') {
        url = `https://dummyjson.com/products?limit=${limitValue}`;
    } else {
        url = `https://dummyjson.com/products`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data
}

async function processData(products?: Product[]) {
    try {
        const response = await fetchData();

        let orderby: Product[];
        let filterData = filter.value.trim();

        if (filterData === 'DESC') {
            orderby = response.products.reverse();
        } else {
            orderby = response.products;
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
        const result = await fetchData();
        const filterData = searchData.value.toLowerCase();

        const search = result.products.filter((product) =>
            product.title.toLowerCase().includes(filterData)
        );

        processData(search);
    } catch (error) {
        console.error(error);
    }
}

async function categoryData(): Promise<void> {
    try {
        loader.style.display = 'block';

        const categoryProduct = category.value.toLowerCase();
        const data = await fetch(`https://dummyjson.com/products/category/${categoryProduct}`);
        const result = await data.json();

        processData(result.products);
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
}
searchData.addEventListener('input', searchProduct);
category.addEventListener('change', categoryData);


function showProduct(productId: number): void {
    location.href = `details.html?id=${productId}`
}

logOut.addEventListener('click', function (): void {
    alert('Are you sure..!!');
    location.href = 'login.html';
});


