/**
 * Created by Administrator on 2017/10/17.
 */
 A = JSON.parse(sessionStorage.getItem("messageA"));
 B = JSON.parse(sessionStorage.getItem("messageB"));
 C = JSON.parse(sessionStorage.getItem("messageC"));
 D = JSON.parse(sessionStorage.getItem("messageD"));
 h= JSON.parse(sessionStorage.getItem("Day"));
 b = JSON.parse(sessionStorage.getItem("b"));
 list = JSON.parse(sessionStorage.getItem("list"));
//杀手页面没有杀人传过来的数据；
var live;
 live = JSON.parse(sessionStorage.getItem("live"));
all = JSON.parse(sessionStorage.getItem("all"));
y = JSON.parse(sessionStorage.getItem("y"));
z = JSON.parse(sessionStorage.getItem("z"));
//o = JSON.parse(sessionStorage.getItem("o"));
//p = JSON.parse(sessionStorage.getItem("p"));
//die = JSON.parse(sessionStorage.getItem("die"));
//die2 = JSON.parse(sessionStorage.getItem("die2"));
//console.log(die);
// 页面三传过来的数组。


console.log(A);
console.log(B);
console.log(C);
console.log(D);
var A, B, C,D;

console.log(h);


//活着的

//var b = [1,0,1,0,0,0]; //模拟传过来的数组
var button = document.getElementById("button");

//var ha = JSON.parse(sessionStorage.getItem("list"));
//console.log(ha);
//button.onclick=function(){
//    var text2 = $("<div class='box-top'>"+"第一天"+"</div>"+
//     "<div class='box-bottom'>"+
//        "<div class='box'>"+"杀手杀人"+"</div>"+
//        "<div class='box'>"+"亡灵发言"+"</div>"+
//        "<div class='box'>"+"玩家依次发言"+"</div>"+
//        "<div class='box'>"+"全民投票"+"</div>"+"</div>");
//        $(".main").append(text2);
//};

//var list = [];
//function number(){
//    for(var i = 0; i<b.length;i++){
//        list[i] = i+1;
//    }
//    console.log(list)
//}
//number();
//狼人的存活状态通过数字改变、   这时候都为活、

window.onload=function() {

    for (var n = 1; n <= h; n++)//n 定义为四个按钮之后的一个轮回、n的大小应该是第四个按钮恩完之后
    {
        var text1 = $("<div class='box-top' id='box-top'>" + "第" + n + "天" + "</div>" +
            "<div class='box-bottom' id='box-bottom'>" +
            "<div class='box' id='box1'>" + "杀手杀人" + "</div>" +
            "<div class='die' id ='die1'>" + "</div>" +
            "<div class='box' id='box2'>" + "亡灵发言" + "</div>" +
            "<div class='box' id='box3'>" + "玩家依次发言" + "</div>" +
            "<div class='box' id='box4'>" + "全民投票" + "</div>"
            + "<div class='die' id ='die2'>" + "</div>" + "</div>");
        $(".main").append(text1);

        //var box = document.getElementById("box");
        //for(var x = 0 ; x<4 ; x++){
        //    box[x].setAttribute("id","box"+n);
        //}
        document.getElementById("box1").setAttribute("id", "box1" + n);
        document.getElementById("box2").setAttribute("id", "box2" + n);
        document.getElementById("box3").setAttribute("id", "box3" + n);
        document.getElementById("box4").setAttribute("id", "box4" + n);
        document.getElementById("die1").setAttribute("id", "die1" + n);
        document.getElementById("die2").setAttribute("id", "die2" + n);
        document.getElementById("box-top").setAttribute("id", "box-top" + n);
        document.getElementById("box-bottom").setAttribute("id", "box-bottom" + n);

        console.log(n);


        //console.log("#box-top"+n);
        //console.log("#box-bottom"+n);
    }
    n = n - 1;
     var bottom=document.getElementsByClassName("box-top");
    //$("#die1"+n).text(identity(die));
    //$("#die2"+n).text(identity(die2));
    //var everyone = document.getElementsByClassName("identity");
    //// 为数组 里面是每一个 独立的盒子
    //everyone[i].setAttribute("id", "identity" + i);

    //for(var v = 1 ; v<= h;v++){
    //    $("#box-top"+v).click(function(){
    //        $("#box-bottom"+v ).toggle();
    //    });
    //}
    //console.log(v);
    (function () {
        for (var q = 1; q <= h; q++) {
            console.log(q);
            $("#box-bottom"+q).css("display","none");
            //bottom[q-1].onclick = function(){
            //    $("#box-bottom"+1).css("display","block");
            //};
            //$("#box-top"+q).click(function(){
            //
            //});
            //  第一次 1  第二次 1、2 第三次 1、2 第四次 1、2、3  第五次 1、2、3
            (function (q) {
                $("#box-top" + q).click(function () {
                    $("#box-bottom" + q).fadeToggle();
                    //slideUp
                    //$("#box-bottom" + q).hidden();//控制class类名实现
                });
                //});
            })(q);
        }
        $("#box-bottom"+h).css("display","block");
    }());

    //$("#button").click(function(){
    //    window.location.href="task2-5.html";
    //});
    console.log(n);

    var buttonA = document.getElementById("box1" + n);
    console.log(n);
    console.log(A);

    var buttonB = document.getElementById("box2" + n);
    var buttonC = document.getElementById("box3" + n);
    var buttonD = document.getElementById("box4" + n);

    //buttonA.onclick = function(){
    //    alert("怎么回事")
    //};
    //var d = document.getElementById("button");
    //d.onclick=function(){
    //    console.log(d);
    //    window.location.href="task2-5.html";
    //};

    //$("#box1").click(function(){
    //    $("#box1").css("background","red")
    //});

    //$("#box2").click(function(){
    //    $("#box3").attr("id","box");
    //    $("#box").css("background","green");
    //    }); //通过 jquery attr 方式修改id;


    //$("#box2").click(function(){
    //    $("#box2").attr("id","box"+n);
    //    $("#box"+n).css("background","green");
    //});
    //
    //通过给给id 加变量的方式来让id改变。


    (function () {
        if (A === n) {
            $("#box1" + n).css("background", "grey");
            //alert(A + n)
        }
        if (B === n) {
            $("#box2" + n).css("background", "grey");
            //alert(B + n)
        }
        if (C === n) {
            $("#box3" + n).css("background", "grey");
            //alert(C + n)
        }
        if (D === n) {
            $("#box4" + n).css("background", "grey");
            //alert(D + n)
        }
    }());

    buttonA.onclick = function () {
        $("#box1" + n).css("background", "grey");
        if (A === n) {
            // 0 == 1
            alert("不要重复点击")
        }
        else {
            A = n;
            //h = h+0.5;
            sessionStorage.setItem("messageA", JSON.stringify(A));
            //sessionStorage.setItem("messageE",JSON.stringify(h));
            window.location.href = "task2-5.html";
            //alert("HAODE")
        }
    };
    buttonB.onclick = function () {
        if (A === n) {

            if (B === n) {
                alert("请不要重复点击")
            }
            else {
                $("#box2" + n).css("background", "grey");
                B = n;
                sessionStorage.setItem("messageB", JSON.stringify(B));
                alert("请死者亮明身份并且发表遗言")
            }
        }
        else {
            alert("请按顺序点击")
        }
    };
    buttonC.onclick = function () {
        if (B === n) {
            if (C === n) {
                alert("请不要重复点击")
            }
            else {
                $("#box3" + n).css("background", "grey");
                C = n;
                sessionStorage.setItem("messageC", JSON.stringify(C));
                alert("玩家依次发言讨论")
            }

        }
        else {
            alert("请按顺序点击");

        }
    };
    buttonD.onclick = function () {
        if (C === n) {
            if (D == n) {
                alert("请不要重复点击")
            }
            else {
                $("#box4" + n).css("background", "grey");
                D = n;
                h++;
                sessionStorage.setItem("Day", JSON.stringify(h));
                sessionStorage.setItem("messageD", JSON.stringify(D));
                window.location.href = "task2-6.html";

            }

        }
        else {
            alert("请按顺序点击")
        }
    };
    (function () {
        for (var y = 0; y < h; y++) {
            $("#box1" + y).css("background", "grey");
            $("#box2" + y).css("background", "grey");
            $("#box3" + y).css("background", "grey");
            $("#box4" + y).css("background", "grey");
        }
    }());


    console.log(list);
    for (var m = 0; m < b.length; m++) {
        if (list[m] > 999 && list[m] < 11111) {
            if (b[m] === 0) {
                y = y + 1;
                list[m] = +1000000;
            }
            else {
                z = z + 1;
                list[m] = -1000000;
            }
        }
    }
    console.log(y);
    console.log(z);
    console.log(list);
    var o = 0, p = 0;
    //-1000<list[q] &&
    for (var q = 0; q < b.length; q++) {
        if (-1000 < list[q] && list[q] < 1000) {
            if (b[q] === 0) {
                o = o + 1;
                //    活着的愚民
            }
            else {
                p = p + 1;
                //    活着的狼
            }
            //}
        }
    }
    console.log(o);
    console.log(p);
    console.log(all);
        if(live == -1){
            //$("#die2" + n).text("昨天晚上是个平安夜");
            all.push(-1);
            sessionStorage.setItem("all", JSON.stringify(all));
            console.log(all);
            live = 18 ;
            sessionStorage.setItem("live", JSON.stringify(live));
        }
        else{
            for (var u = 0; u < b.length; u++) {
            if (list[u] === 1000000 || list[u] === -1000000) {
                //$("#die2" + n).text("死亡的是" + (u + 1) + "号" + "他的身份是" + identity(u));
                all.push(u);
                sessionStorage.setItem("all", JSON.stringify(all));
                //sessionStorage.setItem("arr", JSON.stringify(all));
                //sessionStorage.setItem("yanzheng", JSON.stringify(all));
                list[u]= list[u]-100;
            }

        }


        //if(list[u] === -1000000){
        //    $("#die2"+n).text("死亡的是"+(u+1)+"号"+"他的身份是"+identity(u));
        //}

    }
    console.log(all);
    sessionStorage.setItem("b", JSON.stringify(b));
    sessionStorage.setItem("list", JSON.stringify(list));
    sessionStorage.setItem("y", JSON.stringify(y));
    sessionStorage.setItem("z", JSON.stringify(z));
    sessionStorage.setItem("h",JSON.stringify(h));
    sessionStorage.setItem("o",JSON.stringify(o));
    sessionStorage.setItem("p",JSON.stringify(p));
    //console.log(b[die]);
    console.log(y);
    console.log(z);
    console.log(b);
    if(y >= Math.floor(b.length/3*2) || p >= o){
        window.location.href = "task2-7.html";
    }
    if(z >= Math.floor(b.length/3) || p >= o){
        window.location.href = "task2-7.html";
    }


    //$("#button1").click(function(){
    //    window.location.href = "task2-4-1.html"
    //});
    $("#button2").click(function(){
        window.location.href = "task2-4-1.html"
    });
    $("#button1").click(function(){
        window.location.href = "task2.html"
    });

//    结束游戏 、 法官日志

};
    function identity(die) {
        if (b[die] == 0) {
            return "水民"
        }
        else if (b[die] == 1) {
            return "狼人"
        }
        else {

        }
    }









