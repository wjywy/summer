// 对ajax进行封装

let sendAjax =  function(type,url,data,dataType,success,error) {
    $.ajax({
        type:type,
        url:url,
        data:data,
        dataType:dataType,
        success:function(res) {
            success(res);
        },
        error:function(err) {
            error(err);
        }
    })
}
export default sendAjax;