import sendAjax from '../function/sendAjax';
import song_success from '../function/song_success';
import error from '../function/error';
import '../less/song.less';


let inputValue = localStorage.getItem('inputValue');
window.onload = function() {
    sendAjax(
        'GET',
        'http://localhost:3000/search',
        {
            keywords: inputValue
        },
        'json',
        song_success,
        error
    )
}