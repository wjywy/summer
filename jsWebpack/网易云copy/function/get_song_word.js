
// 获取歌词

let get_song_word = function(res) {
            console.log(res);
                    let songWordArea = document.getElementById('songWordArea');
                    let songWord = document.createElement('div'); 
                    songWordArea.appendChild(songWord);
                    let changeSongWord = res.lrc.lyric;
                    songWord.innerHTML = changeSongWord.replace(/\[.*?\]/g,'');  //去除字符串中的中括号及其内容
                    songWord.className = 'songWord';
        }
export default get_song_word;