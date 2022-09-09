import sendAjax from '../function/sendAjax'
import research_success from '../function/research_success'
import click_find from '../function/click_find'
import error from '../function/error'
import '../less/research.less'


window.onload = function() {
    sendAjax(
        'GET',
        'http://localhost:3000/search/hot/detail',
        '',
        'json',
        research_success,
        error
    )
}

click_find();

let searchList = document.getElementById('clickSearch');
searchList.addEventListener('click', function () {
            localStorage.setItem('inputValue',document.getElementById('research').value) 
            // = document.getElementById('research').value;
            location.href = 'song.html';

})