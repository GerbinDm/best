'use strict';

function firstTask() {
    var first,second,third;
    first = prompt ('input value ' );
    first=+first;
    second=first*3;
    third=second +first;
    alert( first+" "+second+" "+third)
}
function secondTask() {
    var x=prompt('first number');
    console.log('first number', x);
    var y=prompt('second number');
    console.log('second number', y);
    x=+x ; y=+y;
    var add=x +y,
        div=x/y,
        sub=x-y,
        mult=x*y;
    console.log("add",add);
    console.log("div",div);
    console.log('sub',sub);
    console.log('mult',mult);
    console.log(2 * 2);

    alert("addition "+add);
    alert("subtraction  "+sub);
    alert("division   "+div);
    alert("multiplication  "+mult);
}
function ThirdTask() {
    var was=prompt('First number'),h;
    var eat=prompt('Second number');
    was=+was,eat=+eat;
    h=(was == eat)
    alert(h)
}
function FourthTask() {
    var workDays=prompt('how many days were you work that month?'),hoursPerDay=prompt('how long is Your work day (in hours)'),rate=prompt('what is Your rate?'),dollar=prompt('Dollar course'),sallary;
    workDays=+workDays,hoursPerDay=+hoursPerDay,rate=+rate,dollar=+dollar;
    sallary=workDays*hoursPerDay*rate*dollar;
    alert   ('Your sallary is '+Math.round(sallary)+ ' HRN');
}
function FifthTask(){
    var n=prompt('input number'),o;
    o=(n % 2 == 0)
    alert(o)
}













function seventhTask (){
    var a=prompt('input  1  number'),d;
    var b=prompt('input  2  number');
    var c=prompt('input  3  number');
    c=+c,a=+a,b=+b;
    d=Math.max(a, b, c)
    alert('max is '+d);

}

function eighthTask(){
    var input=prompt('Ill check if your simbol is number'),o;
    input=+input;
    o=((input+input)==(input*2))
    alert(o);
}

function ninthTask(){
    var p=Math.round(Math.random()*100);
    var t=prompt('input number'),d;
    d=Math.max(p,t)
    alert('max is '+d +' randomized is '+ p +' inputed '+ t)
}
function tenthTask(){
    var p, t;
    alert ("x < y = " + ((p = Math.round(Math.random()*100)) < (t = prompt('Input your number', ''))) + ", x = " + p + ", y = " + t);
}