


        let research_success = function(res) {

            document.getElementById('image2').addEventListener('click',function() {
                window.location.href = './index.html';//返回主页
            })

                document.getElementById('image1').addEventListener('click',function() {
                    window.history.go(-1);//返回上一页
                })
            
            
                for (let i = 0; i < res.data.length; i++) {
                    let totalBox = document.getElementById('hotShow');//获取总盒子
                    let normalBox = document.createElement('div');//创建一排的盒子
                    totalBox.appendChild(normalBox);
            
                    let sortNumber = document.createElement('div');//热度排名
                    normalBox.appendChild(sortNumber);//装进横盒
                    sortNumber.innerHTML = (i+1);    //序号
                    if(sortNumber.innerHTML<=3) {
                        sortNumber.classList.add('changeColor');
                    } else {
                        sortNumber.classList.add('oldColor');
                    }
            
                    let contentAndName = document.createElement('div');//将content和name装在一起
                    normalBox.appendChild(contentAndName);//装进横盒
            
                    let name = document.createElement('div');//热曲的名字
                    contentAndName.appendChild(name);  //装进文本姓名盒
                    name.innerHTML = res.data[i].searchWord;   //热曲名
            
            
                    let content = document.createElement('div');//歌曲介绍
                    contentAndName.appendChild(content);  //装进文本姓名盒
                    content.innerHTML = res.data[i].content;  //热曲文本详情
            
                    let hotNumberDiv = document.createElement('div')//创建专门装热度指数的盒子
                    normalBox.appendChild(hotNumberDiv);
                    hotNumberDiv.classList.add('hotNumberDiv');
                    let hotNumber = document.createElement('div');//热度指数
                    hotNumberDiv.appendChild(hotNumber);    //装进盒子
                    hotNumber.innerHTML = res.data[i].score;  //热曲热度指数
            
            
                    totalBox.className = 'totalBox';
                    normalBox.className = 'normalBox';
                    content.className = 'content';
                    name.className = 'name';
                    hotNumber.className = 'hotNumber';
                    contentAndName.className = 'contentAndName';
                    sortNumber.classList.add('sortNumber');
                }
                let normalBoxList = document.getElementsByClassName('normalBox');
                let nameList = document.getElementsByClassName('name');
                    for(let i=0;i<normalBoxList.length;i++) {
                        normalBoxList[i].addEventListener('click',function () {
                            let researchBehind = document.getElementById('research');
                            researchBehind.value = nameList[i].innerHTML;
                        })
                    }
        }
       
    

export default research_success;

