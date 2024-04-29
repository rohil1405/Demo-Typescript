var main = document.getElementById('data');
var loader = document.getElementById('loader');
var search = document.getElementById('search');
function fetchData() {
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=YTFE0cCtsJbs2quOA2XY1Jeide9uhLnC&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
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
    clearTimeout(timer);
    timer = setTimeout(function () {
    }, timeout);
    var filteredData = data.filter(function (_a) {
        var title = _a.title;
        return title.toLowerCase().includes(search.value.toLowerCase());
    });
    main.innerHTML = '';
    processData(filteredData);
}
function display() {
    fetchData()
        .then(function (response) {
        processData(response.data);
        search.addEventListener('change', function () { return filterData(response.data); });
        loader.style.display = 'none';
    })
        .catch(function (error) { return console.error(error); });
}
// display();
