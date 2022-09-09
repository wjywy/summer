import songList_success from "../function/songListSuccess";
import sendAjax from "../function/sendAjax";
import error from "../function/error";
import "../less/songList.less"

let idList = window.localStorage.indexId;
// alert(typeof(idList));
let numberIdList = Number(idList);
// alert(numberIdList);

window.onload = function() {
    sendAjax(
        'GET',
        'http://localhost:3000/playlist/detail',
        {
            id: numberIdList
        },
        'json',
        songList_success,
        error
    )
}

