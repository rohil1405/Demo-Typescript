const oneDetails = document.getElementById('one') as HTMLDivElement;

async function oneEmoji(id: string) {
    const result = await fetch(`https://api.giphy.com/v2/emoji?api_key=YTFE0cCtsJbs2quOA2XY1Jeide9uhLnC&limit=100&offset=0/${id}`);
    const data = await result.json();
    return data;
}

async function infoEmoji(data?: Emoji[]): Promise<void> {
    const url = new URLSearchParams(window.location.href);
    const id = url.get('id');

    try {
        if(id===null) {
            console.error('id is missing in url');
            return;
        } else {
            const ele = await oneEmoji(id);
            oneDetails.innerHTML+=
            `<div id="box">
            <div id='complete' onclick='showEmoji(${ele.id})'>
                <img src='${ele.images.fixed_width_still.url}'>
                <p id='content'><strong>${ele.title}</strong></p> 
            </div>
        </div>`;
        }
    } catch(error) {
        console.error(error); 
    } finally {
        loaderRound.style.display = 'none'; 
    }
}
infoEmoji();