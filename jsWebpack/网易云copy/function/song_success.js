


import Circles_triangles from './Circles-triangles'

        let song_success = function(res) {
            console.log(res);
            // // 得到相应歌曲的id：
            // let songId = res.result.songs.id

            document.getElementById('image1').addEventListener('click', function () {
                window.history.go(-1);
            });
            document.getElementById('image2').addEventListener('click', function () {
                window.location.href = './index.html'
            })

            document.getElementById('research').addEventListener('click', function () {
                window.location.href = './research.html'
            })


            for (let i = 0; i < res.result.songs.length; i++) {
                let totalBox = document.getElementById('totalBox');
                totalBox.classList.add('totalBox');

                let normalBox = document.createElement('div')//一列的盒子
                totalBox.appendChild(normalBox);
                normalBox.classList.add('normalBox');

                let divide = document.createElement('div');
                totalBox.appendChild(divide);
                divide.classList.add('divide');

                let songName = document.createElement('div');//装歌名的盒子
                songName.innerHTML = res.result.songs[i].name;    //歌曲名字
                normalBox.appendChild(songName);
                songName.classList.add('songName');

                let introduceAndSingpeople = document.createElement('div');
                normalBox.appendChild(introduceAndSingpeople);
                introduceAndSingpeople.className = 'introduceAndSingpeople';

                Circles_triangles(normalBox);


                let singPeople = document.createElement('div');//唱歌的人，可能有多位
                introduceAndSingpeople.appendChild(singPeople);
                singPeople.className = 'singPeople';

                for (let k = 0; k < res.result.songs[i].artists.length; k++) {
                    let singPeoples = document.createElement('div');
                    singPeople.appendChild(singPeoples);
                    singPeoples.classList.add('singPeoples');

                    if (res.result.songs[i].artists.length == 0) {
                        singPeoples.innerHTML = res.result.songs[i].artists[k].name;   //唱歌的人
                    } else {
                        singPeoples.innerHTML = res.result.songs[i].artists[k].name + '/';
                    }
                }

                let introduce = document.createElement('div');//歌曲介绍盒子
                introduce.innerHTML = res.result.songs[i].album.name;  //歌曲背景
                introduceAndSingpeople.appendChild(introduce);
                introduce.classList.add('introduce');
                Circles_triangles(normalBox);

            }

            //点击歌曲到详情页面
            let normalBoxList = document.getElementsByClassName('normalBox');
            let songIdList = [];
            for (let i = 0; i < normalBoxList.length; i++) {
                songIdList[i] = res.result.songs[i].id;
            }
            for (let i = 0; i < normalBoxList.length; i++) {
                normalBoxList[i].addEventListener('click', function () {
                    let songListData = {
                        songListId: songIdList[i],
                        songMusicPicture: res.result.songs[i].artists[0].img1v1Url,
                        eachSongName:res.result.songs[i].name
                    };
                    localStorage.setItem('songListData', JSON.stringify(songListData));
                    location.href = 'songDetail.html';
                })
            }
        }

export default song_success;