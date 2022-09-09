 //点击出现可搜索文本
let click_find = function() {
document.getElementById('research').addEventListener('click', function () {
    let inputWord = document.getElementById('research').value;
    if (inputWord == '') {
        inputWord = '';
    } else {
        let totalBox = document.getElementById('hotShow');
        let hotshowBang = document.getElementById('hotShowBang')//热搜榜三个字
        hotshowBang.classList.add('gone')
        totalBox.classList.add('gone');
        let searchList = document.getElementById('clickSearch');
        searchList.innerHTML = '搜索' + '"' + inputWord + '"';
    }
})
}
export default click_find;