//圆和三角

let Circles_triangles = function(putBox) {
    let yuan = document.createElement('div');//创建一个圆
    putBox.appendChild(yuan);
    yuan.classList.add('yuanRight')
    let triangle = document.createElement('div');//创建一个三角形
    yuan.appendChild(triangle);
    triangle.classList.add('triangleRight'); 
}
export default Circles_triangles;