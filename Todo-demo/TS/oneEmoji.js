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
const oneDetails = document.getElementById('one');
function oneEmoji(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch(`https://api.giphy.com/v2/emoji?api_key=YTFE0cCtsJbs2quOA2XY1Jeide9uhLnC&limit=100&offset=0/${id}`);
        const data = yield result.json();
        return data;
    });
}
function infoEmoji(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URLSearchParams(window.location.href);
        const id = url.get('id');
        try {
            if (id === null) {
                console.error('id is missing in url');
                return;
            }
            else {
                const ele = yield oneEmoji(id);
                oneDetails.innerHTML +=
                    `<div id="box">
            <div id='complete' onclick='showEmoji(${ele.id})'>
                <img src='${ele.images.fixed_width_still.url}'>
                <p id='content'><strong>${ele.title}</strong></p> 
            </div>
        </div>`;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loaderRound.style.display = 'none';
        }
    });
}
infoEmoji();
