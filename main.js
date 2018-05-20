function select(){
    var result = new Array;
   for(var i = 1 ; i <3;i++){
       var a = document.getElementsByName("select_"+i);
       for(var j=0; j<4;j++)
       if(a[j].checked)
       result.push(a[j].value);
   } 
   return result;
}

function judge(){
    var result = new Array;
    for(var i = 1 ; i <3;i++){
        var a = document.getElementsByName("judge_"+i);
        for(var j=0; j<2;j++)
        if(a[j].checked)
        result.push(a[j].value);
    } 
    return result;
}
function blank(){
    var result = new Array;
    var a ;
    for(var i=4 ;i<=7;i++){
    a = document.getElementById("input"+i);
    result.push(a.value);}
    return result;
}
function multi_select(){
    var result = new Array;
    for(var i = 1 ; i <3;i++){
        var answer = new Array;
        var a = document.getElementsByName("multi_select_"+i);
        for(var j=0; j<4;j++)
        if(a[j].checked)
        answer.push(a[j].value);
       answer=answer.toString();
        result.push(answer);
    } 
    return result;
}

function answer(){
    var a = document.getElementById("text");
    return a.value ;
}
function score(){
    var input=new Array;
    var result = 0 ;
    var error = new Array;
    input=input.concat(blank(),select(),multi_select(),judge(),answer());
    var correct = correct_answer();
    for(var i = 0 ; i < input.length ; i++){
    if(input[i] == correct[i].value)
    result += correct[i].score;
    else
    error.push(correct[i].id)
}
    error=error.toString();
    alert("得分:"+result+"分");
    if(error != "")
    alert(error+"\n有错误");
}