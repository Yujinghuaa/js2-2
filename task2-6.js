/**
 * Created by Administrator on 2017/10/19.
 */
/**
 * Created by Administrator on 2017/10/17.
 */
var button = document.getElementById("button");
var y;
//$(document).ready(function() {
//var A = JSON.parse(sessionStorage.getItem("A"));
//console.log(A);
var b = JSON.parse(sessionStorage.getItem("b"));
var list = JSON.parse(sessionStorage.getItem("list"));
console.log(b);
console.log(list);
//var b = [1, 0, 1, 0];


console.log(b.length);
//var list=[];
//list[0]=0;
//list[1]=1;
//list[2]=9999999;
//list[3]=-150000000;
console.log(list[1]);
//var i = 0;   即使去掉这个 函数里面的i 依旧为全局变量
window.onload = function () {

    for (i = 0; i < b.length; i++) {
        var c = "box" + i;
        //var text1 = $("<div class='box'><p class='identity'>"identity()"</p>"+"<p class='number'>"(i+1)+号"</p></div>");
        var text1 = $("<div class='box' >" + "<p class='identity'>" + identity()
            + "</p>" + "<p class='number'>" + (i + 1) + "号" + "</p>" + "</p>" + "</div>");
        $(".main").append(text1);
        var everyone = document.getElementsByClassName("identity");
        // 为数组 里面是每一个 独立的盒子
        everyone[i].setAttribute("id", "identity" + i);
        //$("#identity"+i).css("background","grey");
        //通过for 循环成功给每个box 赋值

        //}
        //console.log(list);

        //$("#box2").attr("id","box"+n);
        //$("#box"+n).css("background","green");

        //var list = document.getElementsByClassName("box");
        //for(var j = 0 ; j< b.length;j++){
        //    list[0].setAttribute("id", "box"+j);
        //    $("#box"+j).css("background","red");
        //}
        //console.log(list);
    }

//(function(j) {}(j) 没用立即执行函数时候 j变量只能到上半部分、加上后好了？ 但是为什么呢？
    for (var j = 0; j < everyone.length; j++) {
        (function(j) {
            if(list[j]>1000){
                $("#identity"+j).css("background","grey");
            }
            else if(list[j]<0){
                $("#identity"+j).css("background","grey");
            }
            else{
                $("#identity"+j).css("background","#f5c97b");
                console.log(everyone[j])
            }

            everyone[j].onclick = function () {
                //console.log(everyone[j]);
                if(list[j]<999 && list[j]>-1 ) {
                    for(var k = 0; k< everyone.length;k++){
                        if(list[k]>1000 || list[k]< -1000){
                            $("#identity"+k).css("background","grey");
                        }
                        else {
                            $("#identity"+k).css("background","#f5c97b");
                        }
                    }
                    var val = $(this).attr("id");
                    $("#" + val).css("background", "grey");
                    list[j] = j + 100;
                    console.log(list)
                }
                else if(list[j]>1000 || list[j]< -100) {
                    alert("死了");
                }
                //else if(list[j]>90 && list[j]<999){
                //    alert("可以了吗")
                //}
            };

            //alert(val);

            //这是一个通过点击事件来控制每一个box 从而提取这个box 的id值;
        })(j);
    }
    //通过for循环给每一个id安排一个点击事件、通过这个点击事件来控住每一个box;


    function identity() {
        if (b[i] == 0) {
            return "水民"
        }
        else {
            return "狼人"
        }
    }



};
var btn = document.getElementById("button");
btn.onclick = function(){
    die();
    if(y == null){
        alert("大兄弟来都来了投死一个吧")
    }
    else
    {
        window.location.href = "task2-4.html";
        sessionStorage.setItem("list",JSON.stringify(list));
        sessionStorage.setItem("die2",JSON.stringify(y));

    }

};

function die(){
    for(var  x = 0; x < list.length; x++ ){
        var l = document.getElementById("identity"+x).style.background;
        if(l === "grey" ){
            list[x] = list[x]+10000;

        }
    }
    console.log(list);
    lastNum();
    //alert(y);
}
function lastNum(){
    for(var z = 0; z<list.length;z++){
        if( list[z]>10000 && list[z]<12000 ){
            y = z;
        }
    }
}

//var txt1="<p>Text.</p>";              // 以 HTML 创建新元素
//var txt2=$("<p></p>").text("Text.");  // 以 jQuery 创建新元素
//var txt3=document.createElement("p");
//txt3.innerHTML="Text.";               // 通过 DOM 来创建文本
//$("body").append(txt1,txt2,txt3);        // 追加新元素


//button.onclick = function(){
//    var text1 = $("<div class='box'>"+"<p class='identity'>"+identity()+"</p>"+"<p class='number'>"+(i+1)+"号"+"</p>"+"</p>"+"</div>");
//    $(".main").append(text1);
//    i++;
//}




//for (var j = 0; j < everyone.length; j++) {
//
//    everyone[j].onclick = function () {
//        var val = $(this).attr("id");
//        $("#" + val).css("background", "grey");
//        //alert(val);
//
//        //这是一个通过点击事件来控制每一个box 从而提取这个box 的id值;
//    }
//}
////通过for循环给每一个id安排一个点击事件、通过这个点击事件来控住每一个box;
//




//for (var j = 0; j < everyone.length; j++) {
//    if(list[j]>100){
//        $("#identity"+j).css("background","red");
//    }
//    else if(list[j]<0){
//        $("#identity"+j).css("background","red");
//    }
//    else{
//        everyone[j].onclick = function () {
//            var val = $(this).attr("id");
//            $("#" + val).css("background", "grey");
//        }
//
//        //alert(val);
//
//        //这是一个通过点击事件来控制每一个box 从而提取这个box 的id值;
//    }
//}
////通过for循环给每一个id安排一个点击事件、通过这个点击事件来控住每一个box;
