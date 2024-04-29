const main = document.getElementById('data') as HTMLDivElement;
const loader = document.getElementById('loader') as HTMLDivElement;
const search = document.getElementById('search') as HTMLInputElement;

interface Data {
    id: string,
    images: {
        original: {
            url: string
        }
    },
    title: string
}

function fetchData(): Promise<{ data: Data[] }> {
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=YTFE0cCtsJbs2quOA2XY1Jeide9uhLnC&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
        .then(response => response.json());
}

function processData(data: Data[]) {
    try {
        data.forEach((ele: Data) => {
            main.innerHTML += `
                <div id="box">
                    <div id='complete'>
                        <img src='${ele.images.original.url}'>
                        <hr>
                    </div>
                    <div>
                        <p id='content'>${ele.title}</p> 
                    </div>
                </div>`;
        });
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
}

function filterData(data: Data[], timeout = 300) {
    let timer;
    
    const filteredData: Data[] = data.filter(({ title }) => title.toLowerCase().includes(search.value.toLowerCase()));
    main.innerHTML = '';
    clearTimeout(timer);
    timer = setTimeout(() => {
        processData(filteredData);
     }, timeout)   
}

function display() {
    fetchData()
        .then(response => {
            processData(response.data);
            search.addEventListener('change', () => filterData(response.data));
            loader.style.display = 'none';
        })
        .catch(error => console.error(error));
}

// display();
