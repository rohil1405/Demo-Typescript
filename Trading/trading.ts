const main = document.getElementById('data') as HTMLDivElement;
const loader = document.getElementById('loader') as HTMLDivElement;
const search = document.getElementById('search') as HTMLInputElement;
const more = document.getElementById('more') as HTMLButtonElement;
// const less = document.getElementById('less') as HTMLButtonElement;

let offset = 0;;

interface Data {
    id: string,
    images: {
        original: {
            url: string
        }
    },
    title: string
}

function fetchData(offset: number): Promise<{ data: Data[] }> {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=EUfHXHggYysp6rmoM1UEzELLuE1Z5pLK&limit=25&offset=${offset}&rating=g&bundle=messaging_non_clips`)
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

    const filteredData: Data[] = data.filter(
        ({ title }) => title.toLowerCase().includes(search.value.toLowerCase())
    );
    main.innerHTML = '';
    clearTimeout(timer);
    timer = setTimeout((): void => {
        processData(filteredData);
    }, timeout)
}

function display(): void {
    fetchData(offset)
        .then(response => {
            processData(response.data);
            search.addEventListener('change', () => filterData(response.data));
            loader.style.display = 'none';
        })
        .catch(error => console.error(error));
}

display();

more.addEventListener('click', function (): void {
    offset += 10;
    fetchData(offset)
        .then(response => {
            processData(response.data);
        })
        .catch(error => console.error(error));
});

// less.addEventListener('click', function (): void {
//     limit -= 10;
//     fetchData(limit)
//         .then(response => {
//             processData(response.data);
//         })
//         .catch(error => console.error(error));
// })

