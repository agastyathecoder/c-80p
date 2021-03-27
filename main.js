function getp1(){
var inputs=[];
for(i=1;i<=6;i++){
    inputs.push(document.getElementById("t1-input"+i).value);
}
document.getElementById("showp1").innerHTML=inputs.join(" .");
}
function getp2(){
    var inputs=[];
    for(i=1;i<=6;i++){
        inputs.push(document.getElementById("t2-input"+i).value);
    }
    document.getElementById("showp2").innerHTML=inputs.join(" .");
    }