import sendAjax from "../function/sendAjax";
import songDetail_success from "../function/songDetail_success";   
import error from "../function/error";
import '../less/songDetail.less';


let songListData = JSON.parse(localStorage.getItem('songListData'));
let numbersongDetailId = songListData.songListId; 


window.onload = function() {
    sendAjax(
        'GET',
        'http://localhost:3000/comment/hot',
        {
            id: numbersongDetailId,
            type: 0
        },
        'json',
        songDetail_success,
        error
    )
}