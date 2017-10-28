/**
 * Created by Administrator on 2017/10/10.
 */
var b = JSON.parse(sessionStorage.getItem("b"));
console.log(b);
var button = document.getElementById("button");

console.log(b);
console.log(b.length);
var clickNumber = 0;
var j = 1;
button.onclick=function() {
    count();
    if (clickNumber < (b.length) * 2) {
        if (clickNumber % 2 == 0) {
            document.getElementById("pic1").style.opacity = "1";
            document.getElementById("pic2").style.opacity = "0";
            document.getElementById("pic2").style.display = "none";
            document.getElementById("pic1").style.display = "block";
            document.getElementById("button").value = "查看"+j+"身份";
            document.getElementById("identity").innerText = "";
            document.getElementById("number").innerHTML = j;

        } else {
            document.getElementById("pic1").style.opacity = "0";
            document.getElementById("pic2").style.opacity = "1";
            document.getElementById("pic1").style.display = "none";
            document.getElementById("pic2").style.display = "block";
            document.getElementById("identity").innerText = identity();
            document.getElementById("number").innerHTML = j;
            if(clickNumber== (b.length)*2-1){
                document.getElementById("button").value= "法官查看";
                button.onclick = function(){
                    window.location.href = "task2-3.html";
                    sessionStorage.setItem("b",JSON.stringify(b));
                };

            }
            else{
            document.getElementById("button").value = "隐藏并传递给" + (j + 1) + "号";
            j++;}

        }

    }
    else {
        document.getElementById("button").innerHTML = "法官查看";

    }
};
function count(){
    clickNumber+=1;
}
function identity(){
    if(b[j]==0){
        return "水民";
    }
    else{
        return "狼人";
    }
}



//for(var i = 0; i < b.length; ) {
//    if (i % 2 == 0){
//        document.getElementById("pic1").style.opacity = "0";
//        document.getElementById("pic2").style.opacity = "1";
//    } else {
//        document.getElementById("pic1").style.opacity = "1";
//        document.getElementById("pic2").style.opacity = "0";
//    }
//    i++
//}
