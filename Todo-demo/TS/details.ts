const loaderMain = document.getElementById('loader') as HTMLDivElement;
const data = document.getElementById('data') as HTMLDivElement;

interface OneProduct {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    rating: number;
    description: string;
    discountPercentage: number,
    category: string
}

async function oneProduct(productId: string) {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = res.json();
    return data;
}

async function infoProduct(products?: OneProduct[]) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {
        if (productId === null) {
            console.error('Product ID is missing in URL');
            return;
        } else {
            const ele = await oneProduct(productId);
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
    } catch (error) {
        console.error(error);
    } finally {
        loaderMain.style.display = 'none';
    }
}

function goback(): void {
    location.href = 'list.html';
}

function addtocart(): void {
    location.href = `list.html`;
        add();
        updateCartCount();
    
    
}

infoProduct();

