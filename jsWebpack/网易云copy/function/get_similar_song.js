//获取相似的歌

import Circles_triangles from "./Circles-triangles"

let get_similar_song = function (res) {
    console.log(res);
    for (let i = 0; i < res.songs.length; i++) {
        let similar = document.getElementById('similar');//获取总盒子
        similar.classList.add('similar');

        let simiNormalBox = document.createElement('div');//一列盒子
        similar.appendChild(simiNormalBox);
        simiNormalBox.classList.add('simiNormalBox')

        let simiImage = document.createElement('img');//相似歌的图片
        simiNormalBox.appendChild(simiImage);
        simiImage.src = res.songs[i].album.blurPicUrl;
        simiImage.classList.add('simiImage');

        let simiNameAndAuthorBackground = document.createElement('div');//装歌名与作者的盒子
        simiNormalBox.appendChild(simiNameAndAuthorBackground);
        simiNameAndAuthorBackground.classList.add('simiNameAndAuthorBackground');

        let simiName = document.createElement('div');//歌名
        simiNameAndAuthorBackground.appendChild(simiName);
        simiName.innerHTML = res.songs[i].album.artists[0].name;
        simiName.classList.add('simiName');

        let simiAuthorBackground = document.createElement('div');//作者与背景
        simiNameAndAuthorBackground.appendChild(simiAuthorBackground);
        simiAuthorBackground.innerHTML
            =
            res.songs[i].name + '-' + res.songs[i].album.name;
        simiAuthorBackground.classList.add('simiAuthorBackground');

        Circles_triangles(simiNormalBox);
    }

    //传歌
    let simiNormalBoxList = document.getElementsByClassName('simiNormalBox');
    for (let i = 0; i < simiNormalBoxList.length; i++) {
        simiNormalBoxList[i].addEventListener('click', function () {
            // res.songs[i].id
            // res.songs[i].album.blurPicUrl
            let songListData = {
                songListId: res.songs[i].id,
                songMusicPicture: res.songs[i].album.blurPicUrl,
                eachSongName: res.songs[i].album.artists[0].name
            };
            localStorage.setItem('songListData', JSON.stringify(songListData));
            location.href = 'songDetail.html';
        })
    }
}
export default get_similar_song;