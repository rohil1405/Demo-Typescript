var main = document.getElementById('data');
var loader = document.getElementById('loader');
var search = document.getElementById('search');
var more = document.getElementById('more');
// const less = document.getElementById('less') as HTMLButtonElement;
var offset = 0;
;
function fetchData(offset) {
    return fetch("https://api.giphy.com/v1/gifs/trending?api_key=EUfHXHggYysp6rmoM1UEzELLuE1Z5pLK&limit=25&offset=".concat(offset, "&rating=g&bundle=messaging_non_clips"))
        .then(function (response) { return response.json(); });
}
function processData(data) {
    try {
        data.forEach(function (ele) {
            main.innerHTML += "\n                <div id=\"box\">\n                    <div id='complete'>\n                        <img src='".concat(ele.images.original.url, "'>\n                        <hr>\n                    </div>\n                    <div>\n                        <p id='content'>").concat(ele.title, "</p> \n                    </div>\n                </div>");
        });
    }
    catch (error) {
        console.error(error);
    }
    finally {
        loader.style.display = 'none';
    }
}
function filterData(data, timeout) {
    if (timeout === void 0) { timeout = 300; }
    var timer;
    var filteredData = data.filter(function (_a) {
        var title = _a.title;
        return title.toLowerCase().includes(search.value.toLowerCase());
    });
    main.innerHTML = '';
    clearTimeout(timer);
    timer = setTimeout(function () {
        processData(filteredData);
    }, timeout);
}
function display() {
    fetchData(offset)
        .then(function (response) {
        processData(response.data);
        search.addEventListener('change', function () { return filterData(response.data); });
        loader.style.display = 'none';
    })
        .catch(function (error) { return console.error(error); });
}
display();
more.addEventListener('click', function () {
    offset += 10;
    fetchData(offset)
        .then(function (response) {
        processData(response.data);
    })
        .catch(function (error) { return console.error(error); });
});
// less.addEventListener('click', function (): void {
//     limit -= 10;
//     fetchData(limit)
//         .then(response => {
//             processData(response.data);
//         })
//         .catch(error => console.error(error));
// })
