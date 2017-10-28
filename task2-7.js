/**
 * Created by Administrator on 2017/10/21.
 */
b = JSON.parse(sessionStorage.getItem("b"));
list = JSON.parse(sessionStorage.getItem("list"));
all = JSON.parse(sessionStorage.getItem("all"));
arr = JSON.parse(sessionStorage.getItem("all"));
ar = JSON.parse(sessionStorage.getItem("all"));
h = JSON.parse(sessionStorage.getItem("h"));
o = JSON.parse(sessionStorage.getItem("o"));
p = JSON.parse(sessionStorage.getItem("p"));
A = JSON.parse(sessionStorage.getItem("messageA"));
B = JSON.parse(sessionStorage.getItem("messageB"));
C = JSON.parse(sessionStorage.getItem("messageC"));
D = JSON.parse(sessionStorage.getItem("messageD"));
console.log(b);
console.log(list);
console.log(all);
console.log(h);
console.log(o);
console.log(A);
console.log(B);
console.log(C);
console.log(D);
//愚民
console.log(ar);
//狼人
var i;
//var e = 3;
window.onload = function(){
    if(all.length%2==0){
        h = h - 1
    }
    else{
        console.log(h);
    }

    for( i = 1;i<=h;i++){
        $(".second").append("<ul>"+
            "<li class='list1'><span>"+"第"+i+"天"+"</span><span>"+"0小时07分"+"</span></li>"+
                "<li class='list2' id='list5'>"+"晚上:"+(all.shift()+1)+"号被杀手杀死,"+(arr.shift()+1)+"号是"+identity(ar[2*i-2])+"</li>"+
                "<li class='list3' id='list4'>"+"白天:"+(all.shift()+1)+"号被全民投票投死，"+(arr.shift()+1)+"号是"+identity(ar[2*i-1])+"</li>"+
            "</ul>");


        document.getElementById("list4").setAttribute("id","list4"+i);
        document.getElementById("list5").setAttribute("id","list5"+i);
    }
    console.log(i);
    if(ar.length%2==1){
        $("#list4"+(i-1)).empty();

    }

    for(var x = 0 ; x<all.length;x++){
        n = all[x]
    }
        if(o > p){
            $(".win").text("水民获得了胜利");
            $("#pic").attr("src","pic/pic-6-4.png");
        }
        else{
            $(".win").text("狼人获得了胜利")
        }
    //$("#list5"+e).text("没有死人是一个平安夜");
};
function identity(die){
    if(b[die]===0){
        return "愚民"
    }
    else if(b[die]===1){
        return "狼人"
    }
    //else{
    //    //$("#list5"+i).text("没有死人这是一个平安夜");
    //
    //    return "    没有死人，这是一个平安夜"
    //}


}

//function win(i){
//    if(ar[2*i-2]<18){
//          y=all.shift()+1;
//    }
//    else{
//        $("#list4"+(i-1)).text("哪天是个平安夜");
//    }
//}
function newGame(){
    localStorage.removeItem("b");
    localStorage.removeItem("list");
    localStorage.removeItem("all");
    localStorage.removeItem("h");
    localStorage.removeItem("o");
    localStorage.removeItem("p");
    localStorage.removeItem("messageA");
    localStorage.removeItem("messageB");
    localStorage.removeItem("messageC");
    localStorage.removeItem("messageD");
    window.location.href = "task2.html"
}
