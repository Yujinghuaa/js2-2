/**
 * Created by Administrator on 2017/10/10.
 */
var n = document.getElementById("nn");
console.log(n.value);
var range = document.getElementById("range");
console.log(range.value);
var minus = document.getElementById("minus");
var add= document.getElementById("add");
function adds(){
    range.value =parseInt(range.value) + 1;
    rang();
    number();

}
function minuss(){
    range.value =parseInt(range.value) - 1;
    rang();
    number();

}
var b = [];
var arr = [];
console.log(parseFloat(n.value));
console.log(n.value);

function number(){
    range.value = parseFloat(n.value);
}
function rang(){
    n.value = parseInt(range.value);
}
//var set = document.getElementById("set");
//set.onclick= function(){
//  alert("xixi")
//};


n.oninput =function book() {
    repeat();
};
range.onchange =function book() {

    repeat();
};
minus.onclick =function book() {
    minuss();
    repeat();
};
add.onclick =function book() {
    adds();
    repeat();
};




//function hehe(){
//    var all = b;
//    window.location.href="任务3.html";
//    sessionStorage.setItem("all",JSON.stringify(all));
//
//}
var c = document.getElementById("go");
c.onclick=function(){
    if(n.value>=4 && n.value<=18){
        window.location.href="task2-2.html";
        sessionStorage.setItem("b",JSON.stringify(b));
    }
    else{
       alert( "请输入玩家数量" + n.value);
    }
    /*第一种方法
     else{
     window.open('test.html');
     }*/
    /*第二种方法法（不成熟）
     else{
     var parm1=document.getElementById("killes").innerHTML; //获取文本节点的值用innerHTML
     var parm2=document.getElementById("peoples").innerHTML;
     var myurl="js-task3.html"+"?"+"parm1="+parm1;
     window.location.assign(myurl);
     }*/

       // var parm1= b ;
       //
       //var myurl="任务3.html"+"?"+"parm1="+parm1;

    //var b = JSON.parse(sessionStorage.getItem("b"));
        //var myurl="js-task3.html"+"?"+"parm1="+parm1;
        //window.location.assign(myurl);

};

//b.splice(0,b.length);
function shuffle(arr) {
    b.length = 0;
    while (arr.length) {
        var index = parseInt(Math.random() * arr.length);
        b.push(arr[index]);
        arr.splice(index, 1);
    }
    console.log(b);
    return b;
}

function repeat(){
    var a = document.getElementById("nn").value;
//        v = parseInt(a) ;
    console.log(a);
    var killer = Math.floor(a / 3);
    var people = a - killer;
    var c = /^([4-9]|1[0-8])$/;
    var re = new RegExp(c);
    if (re.test(a)) {
        //alert("你真的棒" +a );
        document.getElementById("killer").innerHTML = killer;
        document.getElementById("people").innerHTML = people;
    }
    else {
        alert('请输入正确的玩家数量！');
        document.getElementById("killer").innerHTML = "";
        document.getElementById("people").innerHTML = "";
        document.getElementById("range").value = 9;
        number()
    }


    for (var i = 0; i < killer; i++) {
        arr[i] = 1;
    }
    for (var j = killer; j < a; j++) {
        arr[j] = 0;
    }
    console.log(arr);
    shuffle(arr);
    console.log(b);
    //console.log(b) ;
}



