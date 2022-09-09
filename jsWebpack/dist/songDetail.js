(()=>{"use strict";var n={694:(n,e,A)=>{A.d(e,{Z:()=>a});var t=A(537),r=A.n(t),i=A(645),o=A.n(i)()(r());o.push([n.id,"body {\n  margin: 0;\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.blurBackground {\n  backdrop-filter: blur(18.75rem);\n  width: 100%;\n  height: 100%;\n}\n.topBoxFather {\n  height: 4.46428571rem;\n}\n.topBox {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 4.46428571rem;\n  width: 100%;\n  position: fixed;\n  z-index: 3;\n  background-color: #45515d;\n}\n.topBox .imgAndFind {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  width: 5.35714286rem;\n  height: 1.953125rem;\n  border-radius: 1.25rem;\n  border: 0.0625rem solid #999999;\n}\n.topBox .imgAndFind img {\n  width: 0.9375rem;\n  height: 0.9375rem;\n}\n.topBox .imgAndFind .image1 {\n  margin-left: 0.9375rem;\n}\n.topBox .imgAndFind .image2 {\n  margin-right: 0.9375rem;\n}\n.topBox .imgAndFind .divide {\n  height: 0.9375rem;\n  width: 0.0625rem;\n  background-color: #999999;\n}\n.topBox .souSuo {\n  margin-left: 4.375rem;\n  color: white;\n}\n.pictureBox {\n  height: 28rem;\n  width: 23.4375rem;\n}\n.musicPicture {\n  width: 23.4375rem;\n  height: 25.66964286rem;\n  z-index: 1;\n  position: absolute;\n}\n.pictureArea {\n  width: 11.625rem;\n  height: 11.625rem;\n  border-radius: 5.8125rem;\n  position: absolute;\n  top: 9.75rem;\n  left: 5.875rem;\n  z-index: 2;\n}\n.pictureAreaRotate {\n  animation: move 7s linear infinite;\n}\n@keyframes move {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.yuan {\n  width: 3.06919643rem;\n  height: 3.06919643rem;\n  border-radius: 1.53459821rem;\n  background-color: transparent;\n  border: 0.0625rem solid white;\n  position: absolute;\n  top: 13.8125rem;\n  left: 9.9375rem;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.yuan .triangle {\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  border: 0.625rem solid transparent;\n  border-left-color: #ffffff;\n  margin-left: 0.625rem;\n}\n.startSing {\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  border: 0.625rem solid transparent;\n  border-left-color: white;\n  border-right-color: white;\n}\n.songWordArea {\n  height: 7.1875rem;\n  text-align: center;\n  overflow: scroll;\n}\n.songWord {\n  color: white;\n  white-space: pre-line;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 1rem;\n}\n.shareTofriends {\n  width: 11.16071429rem;\n  height: 2.4565508rem;\n  border-radius: 1.4375rem;\n  border: 0.0625rem solid #999999;\n  margin-left: 6.25rem;\n  margin-top: 1.875rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 0.9375rem;\n}\n.listen-buttonToListen {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.listen-buttonToListen .listen {\n  color: #ffffff;\n  font-size: 0.9375rem;\n  margin-bottom: 1.11607143rem;\n  margin-top: 1.11607143rem;\n  margin-left: 0.83705357rem;\n}\n.listen-buttonToListen .buttonToListen {\n  width: 5.02232143rem;\n  height: 1.67410714rem;\n  border: 0.0625rem solid #999999;\n  color: white;\n  font-size: 0.625rem;\n  margin-right: 0.83705357rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.9375rem;\n}\n.similar {\n  display: flex;\n  flex-direction: column;\n}\n.similar .simiNormalBox {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 1.11607143rem;\n}\n.similar .simiNormalBox .simiImage {\n  width: 2.51116071rem;\n  height: 2.51116071rem;\n  margin-left: 0.83705357rem;\n  margin-right: 0.83705357rem;\n}\n.similar .simiNormalBox .simiNameAndAuthorBackground {\n  display: flex;\n  flex-direction: column;\n  width: 11.16071429rem;\n}\n.similar .simiNormalBox .simiNameAndAuthorBackground .simiName {\n  color: #ffffff;\n  font-size: 0.75rem;\n  margin-bottom: 0.55803571rem;\n}\n.similar .simiNormalBox .simiNameAndAuthorBackground .simiAuthorBackground {\n  color: #999999;\n  font-size: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.similar .simiNormalBox .yuanRight {\n  width: 1.39508929rem;\n  height: 1.39508929rem;\n  border-radius: 0.69754464rem;\n  background-color: transparent;\n  border: 0.0625rem solid #999999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0.625rem;\n}\n.similar .simiNormalBox .yuanRight .triangleRight {\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  border: 0.4375rem solid transparent;\n  border-left-color: #999999;\n  margin-left: 0.625rem;\n}\n.perfectComment {\n  color: #ffffff;\n  margin-top: 1.11607143rem;\n  margin-left: 0.61383929rem;\n  font-size: 0.9375rem;\n}\n.commentArea {\n  display: flex;\n  flex-direction: column;\n}\n.commentArea .oneComment {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n}\n.commentArea .oneComment .picture {\n  width: 1.953125rem;\n  height: 1.953125rem;\n  border-radius: 1.953125rem/2;\n  margin-left: 0.61383929rem;\n  margin-right: 0.61383929rem;\n  margin-top: 1.28348214rem;\n}\n.commentArea .oneComment .peopleTimeContent {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n}\n.commentArea .oneComment .peopleTimeContent .commentPeople {\n  font-size: 0.625rem;\n  color: #989c9e;\n  margin-top: 1.28348214rem;\n}\n.commentArea .oneComment .peopleTimeContent .time {\n  font-size: 0.5rem;\n  color: #686f75;\n  margin-bottom: 0.55803571rem;\n}\n.commentArea .oneComment .peopleTimeContent .commentContent {\n  font-size: 0.75rem;\n  color: #ffffff;\n  margin-bottom: 1.11607143rem;\n}\n.commentArea .oneComment .callCount {\n  font-size: 0.625rem;\n  color: #686f75;\n  position: absolute;\n  right: 2.5rem;\n  margin-top: 1.28348214rem;\n}\n.commentArea .oneComment .call {\n  width: 1.11607143rem;\n  height: 0.83705357rem;\n  position: absolute;\n  margin-top: 1.28348214rem;\n  right: 1rem;\n}\n.commentArea .divide {\n  height: 0.0625rem;\n  width: 19.375rem;\n  background-color: #989c9e;\n  margin-left: 3.125rem;\n}\n.gone {\n  display: none;\n}\n","",{version:3,sources:["webpack://./网易云copy/less/songDetail.less"],names:[],mappings:"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",sourcesContent:["body {\n    margin: 0;\n    padding: 0;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.blurBackground {\n    backdrop-filter: blur(18.75rem); //毛玻璃\n    // background-color: rgb(104, 111, 117);\n    width: 100%;\n    height: 100%;\n}\n\n@imgAndFindSizeW: 23.4375rem * (96/420); //图标框的宽\n@imgAndFindSizeH: (2.1875rem / (420/375)); //图标框的高\n@margin7: (5rem / (420/375)); //图标框与上方的间距\n\n.topBoxFather {\n    height: @margin7;\n    // backdrop-filter: blur(62.5rem);//加了这个不会显示固定定位\n}\n\n.topBox {\n    //最顶排\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    height: @margin7 ;\n    width: 100%;\n    // margin-left: @margin1;\n    position: fixed;\n    z-index: 3;\n    background-color: rgb(69,81,93); //背景色透明\n\n    .imgAndFind {\n        //图标框\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        background-color: rgba(255, 255, 255, 0.3);\n        width: @imgAndFindSizeW;\n        height: @imgAndFindSizeH;\n        border-radius: 1.25rem;\n        border: .0625rem solid rgb(153, 153, 153);\n\n        img {\n            //图标图片\n            width: .9375rem;\n            height: .9375rem;\n        }\n\n        .image1 {\n            margin-left: .9375rem;\n        }\n\n        .image2 {\n            margin-right: .9375rem;\n        }\n\n        .divide {\n            height: .9375rem;\n            width: .0625rem;\n            background-color: rgb(153, 153, 153);\n        }\n    }\n\n    .souSuo {\n        margin-left: 4.375rem;\n        color: white;\n    }\n}\n\n\n@sizew: 23.4375rem;\n@sizeh: (28.75rem / (420/375));\n\n.pictureBox {\n    height: 28rem;\n    width: @sizew;\n}\n\n.musicPicture {\n    //音乐的图片\n    width: @sizew;\n    height: @sizeh;\n    z-index: 1;\n    position: absolute;\n}\n\n@left: 5.875rem; //向右偏移量\n@top: 9.75rem; //向下偏移量\n\n.pictureArea {\n    //每首歌专属的图片\n    width: 11.625rem;\n    height: 11.625rem;\n    border-radius: 5.8125rem;\n    position: absolute;\n    top: @top;\n    left: @left;\n    z-index: 2;\n}\n\n.pictureAreaRotate {\n    //旋转动画\n    animation: move 7s linear infinite;\n}\n\n@keyframes move {\n\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n\n\n@yuan1: 23.4375rem * (55/420); //圆   \n@topyuan: @top + 4.0625rem;\n@leftyuan: @left + 4.0625rem;\n\n.yuan {\n    width: @yuan1;\n    height: @yuan1;\n    border-radius: 23.4375rem * (55/420) * (1/2);\n    background-color: transparent;\n    border: .0625rem solid white;\n    position: absolute;\n    top: @topyuan;\n    left: @leftyuan;\n    z-index: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .triangle {\n        //三角，点击播放\n        width: 0;\n        height: 0;\n        line-height: 0;\n        font-size: 0;\n        border: .625rem solid transparent;\n        border-left-color: rgb(255, 255, 255);\n        margin-left: .625rem;\n    }\n}\n\n\n\n.startSing {\n    //点击暂停\n    width: 0;\n    height: 0;\n    line-height: 0;\n    font-size: 0;\n    border: .625rem solid transparent;\n    border-left-color: white;\n    border-right-color: white;\n}\n\n.songWordArea {\n    //歌词区\n    height: 7.1875rem;\n    text-align: center;\n    overflow: scroll;\n}\n\n.songWord {\n    //歌词的显示\n    color: white;\n    white-space: pre-line; //识别换行\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 1rem;\n}\n\n@shareTofriendsW:23.4375rem * (200/420);\n@shareTofriendsH:41.6875rem * (35/(667*(374/420)));\n\n\n    .shareTofriends {\n        width: @shareTofriendsW;\n        height: @shareTofriendsH;\n        border-radius: 1.4375rem;\n        border: .0625rem solid rgb(153, 153, 153);\n        margin-left: 6.25rem;\n        margin-top: 1.875rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        font-size: .9375rem;\n    }\n\n\n\n@buttonToListenW:23.4375rem * (90/420);//一键收听的宽\n@buttonTolistenH:41.6875rem * (30/(667*(420/375)));//一键收听的高\n.listen-buttonToListen {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    .listen {\n        // 喜欢这首歌的人也喜欢听\n        color: rgb(255, 255, 255);\n        font-size: .9375rem;\n        margin-bottom: @simiNormalBoxMargin;\n        margin-top: @simiNormalBoxMargin;\n        margin-left: @simiImageLeft;\n    }\n    .buttonToListen {\n        width: @buttonToListenW;\n        height: @buttonTolistenH;\n        border: .0625rem solid rgb(153, 153, 153);\n        color: white;\n        font-size: .625rem;\n        margin-right: @simiImageLeft;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border-radius:.9375rem;\n    }\n}\n\n\n\n//相似的歌曲\n@simiImageW: 23.4375rem * (45/420); //照片的宽\n@simiImageH: (2.8125rem / (420/375)); //照片的高\n@simiNormalBoxMargin: (1.25rem / (420/375)); //排与排之间的间距\n@simiImageLeft: 23.4375rem * (15/420); //照片与左边的间距\n@simiSongnameMargin: (.625rem / (420/375)); //名字与歌手之间的间距\n@yuan2: 23.4375rem * (25/420); //圆\n@showWord: 23.4375rem * (200/420); //可显示文本\n\n.similar {\n    display: flex;\n    flex-direction: column;\n\n    .simiNormalBox {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-bottom: @simiNormalBoxMargin ;\n\n        .simiImage {\n            width: @simiImageW;\n            height: @simiImageH;\n            margin-left: @simiImageLeft;\n            margin-right: @simiImageLeft;\n        }\n\n        .simiNameAndAuthorBackground {\n            display: flex;\n            flex-direction: column;\n            width: @showWord;\n\n            .simiName {\n                color: rgb(255, 255, 255);\n                font-size: .75rem;\n                margin-bottom: @simiSongnameMargin;\n            }\n\n            .simiAuthorBackground {\n                color: rgb(153, 153, 153);\n                font-size: .5rem;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n            }\n        }\n\n        .yuanRight {\n            width: @yuan2;\n            height: @yuan2;\n            border-radius: 23.4375rem * (25/420) * (1/2);\n            background-color: transparent;\n            border: .0625rem solid rgb(153, 153, 153);\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            position: absolute;\n            right: .625rem;\n\n\n            .triangleRight {\n                //三角\n                width: 0;\n                height: 0;\n                line-height: 0;\n                font-size: 0;\n                border: .4375rem solid transparent;\n                border-left-color: rgb(153, 153, 153);\n                margin-left: .625rem;\n            }\n        }\n\n\n    }\n}\n\n\n\n\n//精彩评论\n.perfectComment {\n    color: rgb(255, 255, 255);\n    margin-top: @simiNormalBoxMargin;\n    margin-left: @margin1;\n    font-size: .9375rem;\n}\n\n\n@size: 23.4375rem * (35/420);\n@margin1: 23.4375rem * (11/420); //头像与左右侧的距离\n@margin2: 23.4375rem * (23/420); //每一列与上面的距离\n@margin3: 23.4375rem * (20/420); //每一列与下面的距离\n@margin4: 23.4375rem * (10/420);\n@margin12: (.9375rem / (420/375)); //点赞图标的高\n\n.commentArea {\n    display: flex;\n    flex-direction: column;\n\n    .oneComment {\n        display: flex;\n        flex-direction: row;\n        justify-content: left;\n\n        // justify-content: center;\n        .picture {\n            width: @size;\n            height: @size;\n            border-radius: @size/2;\n            margin-left: @margin1;\n            margin-right: @margin1;\n            margin-top: @margin2;\n        }\n\n        .peopleTimeContent {\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: flex-start;\n\n            .commentPeople {\n                font-size: .625rem;\n                color: rgb(152, 156, 158);\n                margin-top: @margin2;\n            }\n\n            .time {\n                font-size: .5rem;\n                color: rgb(104, 111, 117);\n                margin-bottom: @margin4;\n            }\n\n            .commentContent {\n                font-size: .75rem;\n                color: rgb(255, 255, 255);\n                margin-bottom: @margin3;\n            }\n        }\n\n        .callCount {\n            font-size: .625rem;\n            color: rgb(104, 111, 117);\n            position: absolute;\n            right: 2.5rem;\n            margin-top: @margin2;\n        }\n\n        .call {\n            width: @margin3 ;\n            height: @margin12;\n            position: absolute;\n            margin-top: @margin2;\n            right: 1rem;\n        }\n    }\n    .divide {\n        height: .0625rem;\n        width: 19.375rem;\n        background-color: rgb(152, 156, 158);\n        margin-left: 3.125rem;\n    }\n}\n\n\n\n.gone {\n    display: none;\n}"],sourceRoot:""}]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",t=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),t&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),t&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,t,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var a=0;a<this.length;a++){var m=this[a][0];null!=m&&(o[m]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),A&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=A):l[2]=A),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(r," */"),o=A.sources.map((function(n){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function A(n){for(var A=-1,t=0;t<e.length;t++)if(e[t].identifier===n){A=t;break}return A}function t(n,t){for(var i={},o=[],a=0;a<n.length;a++){var m=n[a],s=t.base?m[0]+t.base:m[0],l=i[s]||0,c="".concat(s," ").concat(l);i[s]=l+1;var d=A(c),g={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==d)e[d].references++,e[d].updater(g);else{var u=r(g,t);t.byIndex=a,e.splice(a,0,{identifier:c,updater:u,references:1})}o.push(c)}return o}function r(n,e){var A=e.domAPI(e);A.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,r){var i=t(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var a=A(i[o]);e[a].references--}for(var m=t(n,r),s=0;s<i.length;s++){var l=A(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=m}}},569:n=>{var e={};n.exports=function(n,A){var t=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(A)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,A)=>{n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var t="";A.supports&&(t+="@supports (".concat(A.supports,") {")),A.media&&(t+="@media ".concat(A.media," {"));var r=void 0!==A.layer;r&&(t+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),t+=A.css,r&&(t+="}"),A.media&&(t+="}"),A.supports&&(t+="}");var i=A.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function A(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,A),i.exports}A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),A.nc=void 0,(()=>{const n=function(n,e,A,t,r,i){$.ajax({type:n,url:e,data:A,dataType:t,success:function(n){r(n)},error:function(n){i(n)}})};const e=function(n){console.log(n);let e=document.getElementById("songWordArea"),A=document.createElement("div");e.appendChild(A);let t=n.lrc.lyric;A.innerHTML=t.replace(/\[.*?\]/g,""),A.className="songWord"};const t=function(n){let e=document.createElement("div");n.appendChild(e),e.classList.add("yuanRight");let A=document.createElement("div");e.appendChild(A),A.classList.add("triangleRight")};const r=function(n){console.log(n);for(let e=0;e<n.songs.length;e++){let A=document.getElementById("similar");A.classList.add("similar");let r=document.createElement("div");A.appendChild(r),r.classList.add("simiNormalBox");let i=document.createElement("img");r.appendChild(i),i.src=n.songs[e].album.blurPicUrl,i.classList.add("simiImage");let o=document.createElement("div");r.appendChild(o),o.classList.add("simiNameAndAuthorBackground");let a=document.createElement("div");o.appendChild(a),a.innerHTML=n.songs[e].album.artists[0].name,a.classList.add("simiName");let m=document.createElement("div");o.appendChild(m),m.innerHTML=n.songs[e].name+"-"+n.songs[e].album.name,m.classList.add("simiAuthorBackground"),t(r)}let e=document.getElementsByClassName("simiNormalBox");for(let A=0;A<e.length;A++)e[A].addEventListener("click",(function(){let e={songListId:n.songs[A].id,songMusicPicture:n.songs[A].album.blurPicUrl,eachSongName:n.songs[A].album.artists[0].name};localStorage.setItem("songListData",JSON.stringify(e)),location.href="songDetail.html"}))};const i=function(n){console.log(n)};let o=JSON.parse(localStorage.getItem("songListData")),a=o.songListId,m=o.songMusicPicture,s=o.eachSongName;const l=function(A){document.getElementById("image1").addEventListener("click",(function(){window.history.go(-1)})),document.getElementById("image2").addEventListener("click",(function(){window.location.href="./index.html"})),document.body.style.backgroundImage="url('"+m+"')";let t=document.createElement("div");document.getElementById("topBox").appendChild(t),t.innerHTML=s,t.classList.add("souSuo");let o=document.getElementById("pictureArea"),l=document.createElement("img");l.src=m,o.appendChild(l),l.classList.add("pictureArea");let c=document.createElement("div");c.id="yuanId";let d=document.createElement("div");d.id="triangleId",o.appendChild(c),c.appendChild(d),c.classList.add("yuan"),d.className="triangle";let g=2,u=document.createElement("audio");u.src="http://music.163.com/song/media/outer/url?id="+a+".mp3",o.appendChild(u),d.addEventListener("click",(function(){let n=document.getElementById("songWordArea"),e=setInterval((()=>{g%2==0?clearInterval(e):n.scrollTop++}),100);g%2==0?(d.className="startSing",l.classList.add("pictureAreaRotate"),u.play()):(d.className="triangle",l.className="pictureArea",u.pause()),g++})),n("GET","http://localhost:3000/lyric",{id:a},"json",e,i),n("GET","http://localhost:3000/simi/song",{id:a},"json",r,i);for(let n=0;n<A.hotComments.length;n++){let e=document.getElementById("commentArea");e.classList.add("commentArea");let t=document.createElement("div");e.appendChild(t),t.classList.add("oneComment");let r=document.createElement("img");t.appendChild(r),r.src=A.hotComments[n].user.avatarUrl,r.classList.add("picture");let i=document.createElement("div");t.appendChild(i),i.classList.add("peopleTimeContent");let o=document.createElement("div");i.appendChild(o),o.innerHTML=A.hotComments[n].user.nickname,o.classList.add("commentPeople");let a=document.createElement("div");i.appendChild(a),a.innerHTML=A.hotComments[n].timeStr,a.classList.add("time");let m=document.createElement("div");i.appendChild(m),m.innerHTML=A.hotComments[n].content,m.classList.add("commentContent");let s=document.createElement("div");t.appendChild(s),s.innerHTML=A.hotComments[n].likedCount,s.classList.add("callCount");let l=document.createElement("img");t.appendChild(l),l.src="../assets/点赞.png",l.classList.add("call");let c=document.createElement("div");e.appendChild(c),c.classList.add("divide")}};var c=A(379),d=A.n(c),g=A(795),u=A.n(g),f=A(569),h=A.n(f),p=A(565),E=A.n(p),C=A(216),B=A.n(C),b=A(589),y=A.n(b),x=A(694),w={};w.styleTagTransform=y(),w.setAttributes=E(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=B();d()(x.Z,w);x.Z&&x.Z.locals&&x.Z.locals;let v=JSON.parse(localStorage.getItem("songListData")).songListId;window.onload=function(){n("GET","http://localhost:3000/comment/hot",{id:v,type:0},"json",l,i)}})()})();
//# sourceMappingURL=songDetail.js.map