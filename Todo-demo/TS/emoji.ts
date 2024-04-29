let demo = document.getElementById('data') as HTMLButtonElement;
let loaderRound = document.getElementById('loader') as HTMLDivElement;

type Emoji = {
    title: string,
    url: string,
    id: string,
    images: {
        fixed_width_still: {
            url: string
        }
    }
}

async function fetchEmoji(): Promise<{ data: Emoji[] }> {
    const response = await fetch('https://api.giphy.com/v2/emoji?api_key=YTFE0cCtsJbs2quOA2XY1Jeide9uhLnC&limit=100&offset=0');
    const data = await response.json();
    return data;
}

async function processEmoji() {
    const result = await fetchEmoji();
    demo.innerHTML = ' ';
    try {
        if (typeof result === 'object') {
            result.data.forEach((ele: Emoji) => {
                demo.innerHTML +=
                    `<div id="box">
                    <div id='complete' onclick='showEmoji(${ele.id})'>
                        <img src='${ele.images.fixed_width_still.url}'>
                        <p id='content'><strong>${ele.title}</strong></p> 
                    </div>
                </div>`;
            })
        }
    } catch (error) {
        console.error(error);
    } finally {
        loaderRound.style.display = 'none';
    }

}
// processEmoji();

function showEmoji(id: string): void {
    location.href = `oneEmoji.html?id=${id}`;
}
