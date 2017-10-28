var button = document.getElementById("button");
//$(document).ready(function() {
//    var b = [1,0,1,0,0,0]; //模拟传过来的数组
    b = JSON.parse(sessionStorage.getItem("b"));
    console.log(b);
    console.log(b.length);
    var i = 0;

    window.onload = function () {
        for (i = 0; i < b.length; i++) {
            //var text1 = $("<div class='box'><p class='identity'>"identity()"</p>"+"<p class='number'>"(i+1)+号"</p></div>");
            var text1 = $("<div class='box'>" + "<p class='identity'>" + identity()
                + "</p>" + "<p class='number'>" + (i + 1) + "号" + "</p>" + "</p>" + "</div>");
            $(".main").append(text1);
        }

};
//var txt1="<p>Text.</p>";              // 以 HTML 创建新元素
//var txt2=$("<p></p>").text("Text.");  // 以 jQuery 创建新元素
//var txt3=document.createElement("p");
//txt3.innerHTML="Text.";               // 通过 DOM 来创建文本
//$("body").append(txt1,txt2,txt3);        // 追加新元素
button.onclick = function(){
    sessionStorage.setItem("b",JSON.stringify(b));
    sessionStorage.setItem("list",JSON.stringify(list));
    var h = 1;
    sessionStorage.setItem("Day",JSON.stringify(h));
    var all= [];
    sessionStorage.setItem("all",JSON.stringify(all));
    var y = 0;
    //死了的民
    sessionStorage.setItem("y",JSON.stringify(y));
    var z = 0;
    //死了的狼
    sessionStorage.setItem("z",JSON.stringify(z));
    var o = 0;
    //或者的民
    sessionStorage.setItem("o",JSON.stringify(o));
    var p = 0;
    //或者的狼
    sessionStorage.setItem("p",JSON.stringify(p));
    var A = 0;
    sessionStorage.setItem("messageA",JSON.stringify(A));
    var B = 0;
    sessionStorage.setItem("messageB",JSON.stringify(B));
    var C = 0;
    sessionStorage.setItem("messageC",JSON.stringify(C));
    var D = 0;
    sessionStorage.setItem("messageD",JSON.stringify(D));
  window.location.href = "task2-4.html"
};
function identity(){
    if(b[i]==0){
        return "水民"
    }
    else{
        return "狼人"
    }
}
var list = [];
function number(){
    for(var i = 0; i<b.length;i++){
        list[i] = i+1;
    }
    console.log(list)
}
number();
//狼人的存活状态通过数字改变、   这时候都为活、

//button.onclick = function(){
//    var text1 = $("<div class='box'>"+"<p class='identity'>"+identity()+"</p>"+"<p class='number'>"+(i+1)+"号"+"</p>"+"</p>"+"</div>");
//    $(".main").append(text1);
//    i++;
//}