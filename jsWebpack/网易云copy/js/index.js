import sendAjax from '../function/sendAjax'
import indexSuccess from '../function/indexSuccess'; //
import error from '../function/error';
import '../less/index.less'


window.onload = function () {
    sendAjax(
        'GET',
        'http://localhost:3000/toplist/detail',
        '',
        'json',
        indexSuccess,
        error
    );
}

let research = document.getElementById('research');
research.addEventListener('click', function () {
    window.location.href = 'research.html';
})
