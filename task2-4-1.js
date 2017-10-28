/**
 * Created by Administrator on 2017/10/26.
 */
all = JSON.parse(sessionStorage.getItem("all"));
arr = JSON.parse(sessionStorage.getItem("all"));
ar = JSON.parse(sessionStorage.getItem("all"));
h=JSON.parse(sessionStorage.getItem("h"));
b=JSON.parse(sessionStorage.getItem("b"));
console.log(b);
console.log(all);
console.log(arr);
console.log(ar);
console.log(all);

window.onload = function () {
    for (i = 1; i <=ar.length/2+0.5; i++) {
        $(".main").append("<ul>" +
            "<li class='list1'><span>" + "第" + i + "天" + "</span></li>" +
            "<li class='list2' id='list5'>" + "晚上:" + (all.shift() + 1) + "号被杀手杀死," + (arr.shift() + 1) + "号是" + identity(ar[2 * i - 2]) + "</li>" +
            "<li class='list3' id='list4'>" + "白天:" + (all.shift() + 1) + "号被全民投票投死，" + (arr.shift() + 1) + "号是" + identity(ar[2 * i - 1]) + "</li>" +
            "</ul>");

        document.getElementById("list4").setAttribute("id", "list4" + i);
        document.getElementById("list5").setAttribute("id", "list5" + i);
    }
    $("#button").click(function () {
        window.location.href = "task2-4.html"
    });
    console.log(i);
    if(ar.length%2 == 1){
        $("#list4"+(i-1)).empty();
    }

};


function identity(die) {

    if (b[die] ===0) {
        return "愚民"
    }
    else if (b[die] === 1) {
        return "狼人"
    }
    //else {
    //    setTimeout(function(){
    //        console.log(i);
    //        $("#list5"+(i-1)).text("没有死人这是一个平安夜");
    //    },0);
    //    //用了一个演示器、貌似是这样的执行
    //
    //    //return " 没有死人，这是一个平安夜"
    //}
}


