

let indexSuccess = function(res) {
    let selfId = [];
    for (let p = 0; p < res.list.length; p++) {
        selfId[p] = res.list[p].id;
    }

    for (let i = 0; i < 4; i++) {
        let total = document.getElementById('totalBox');//创建总盒子
        total.classList.add('totalBox');
        let imgSong = document.createElement('div');
        total.appendChild(imgSong);
        let picture = document.createElement('img');//图片
        picture.src = res.list[i].coverImgUrl;
        imgSong.appendChild(picture);//放入大盒子
        picture.classList.add('pictureClass');   //添加样式
        imgSong.className = 'imgSongClass';   //添加样式
        let songBox = document.createElement('div');//装消息的盒子
        imgSong.appendChild(songBox);
        songBox.classList.add('songBox');
        // let time = document.createElement('p');//图片左下角de信息
        // time.innerHTML = res.list[i].updateFrequency;

        for (let k = 0; k < 3; k++) {
            let n = k + 1;
            let songAndAuthor = document.createElement('div');//歌曲名字与作者
            songBox.appendChild(songAndAuthor);
            songAndAuthor.innerHTML
                =
                n + '.' + res.list[i].tracks[k].first + '-' + res.list[i].tracks[k].second;
            songAndAuthor.classList.add('songAndAuthor');
        }
    }
    // let test = soaring[0].first;
    // alert(test);

    let imgSongList = document.getElementsByClassName('imgSongClass');
    for (let m = 0; m < imgSongList.length; m++) {
        imgSongList[m].addEventListener('click', function () {
            window.localStorage.indexId = selfId[m];
            location.href = 'songList.html';
        })
    }
};
export default indexSuccess; 
