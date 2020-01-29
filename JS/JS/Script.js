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
function sixthTask (){
    var a=prompt('input  tag  number'),d;
    var b=prompt('input  selectors  number');
    var c=prompt('input  attributes  number');
    c=+c,a=+a,b=+b;
    d=Math.max(a, b, c)
    alert('max is '+d);

}
function seventhTask(){
    var input=prompt('Ill check if your simbol is number'),o;
    input=+input;
    o=((input+input)==(input*2))
    alert(o);
}
function eighthTask(){
    var p=Math.round(Math.random()*100);
    var t=prompt('input number'),d;
    d=Math.max(p,t)
    alert('max is '+d +' randomized is '+ p +' inputed '+ t)
}
function ninthTask(){
    var p, t;
    alert ("x < y = " + ((p = Math.round(Math.random()*100)) < (t = prompt('Input your number', ''))) + ", x = " + p + ", y = " + t);
}
function tenthTask() {
    var x=+prompt("Input number tag"),y=+prompt("Input number selectors"),z=+prompt("Input number attributes"),m;
    m=+Math.min(x,y,z)
    if (x==y || x==z || y==z) {

        alert("there are several same and the min = " +m)}
    else
        switch (m) {
            case (x ):
                alert("x is the min = "+x)	;
                break;
            case (y ):
                alert("y is min = " +y);
                break;
            case (z ):
                alert("z is min = "+z);
                break;
            default:
                alert("there are several same and the min  = " +m)
        }

}
function elevenTask() {
    var x=prompt("Input number");
    if (x < 0)
        alert("x is negative = "+x)	;
    else if (x == 0)
        alert("x is zero")	;
    else
        alert("x is positive = "+x)	;

}
function twelveTask() {
    var my=+prompt("your money"),his=+prompt("friends money"),tour=+prompt("money need to go to Mayorka");
    if (my+his < tour)
        alert("relax and go to dreenk beer ")	;
    else
        alert("go to mayorka ")	;
}
function thrtnTask() {
    var age=+prompt("input age");
    if (age >= 20 && age < 27)
        alert("send invite to NAVY ")	;
    else
        alert("relax ")	;
}
function frtnTask() {
    var num=+prompt("input number of taxi");
    switch (num) {
        case (7):alert("go home");break;
        case (225):alert("go home" );break;
        case (255):alert("go home");break;
        default:alert("wait");
    }
}
function fftnTask(){
    var date = new Date();
    var day =date.getDay();
    if (day <= 5) {
        alert("go to the work");
    } else {
        alert("have a rest");
    }
}
function sxtnTask (){
    var x=+prompt("input number x");
    var y=+prompt("input number y");
    if (x <= 1 && y>=3 || y<0 ) {
        var sum=x+y
        alert("sum= "+sum);
    }
    else {
        alert("incorrect");
    }
}
function svtnTask (){
    var x=+prompt("input number x");
    var y=+prompt("input number y");
    if (x <= 1 && y>=3 || y<0 ) {
        var sum=x+y
        alert("sum= "+sum);
    }
    else {
        alert("incorrect");
    }
}
function eghtnTask(){
    var x=+prompt("input number x");
    var y=+prompt("input number y");
    if (x > 2 && x < 11 || y >= 6 && y < 14 ) {
        var sum=x+2
        alert("sum= "+sum);
    }
    else {
        var sum=x+5
        alert("sum= "+sum);

    }
}
function nntnTask(){
    var name=prompt("input name");
    if(name==null){
        alert("cancel");
    } else if(name==""){
        alert("empty field");
    } else
        alert("Hello "+name);
}
function twlwTask(){
    var greeting="";
    var lan=prompt("input language (ru,en,de)");
    switch (lan) {
        case "ru":greeting="Привет";alert(greeting);break;
        case "en":greeting="Hello";alert(greeting);break;
        case "de":greeting="Hallo";alert(greeting);break;
        default:alert("wrong language");
    }
}
function twntoTask() {
    var date = new Date();
    var month = date.getMonth();
    month = month + 1;
    alert("month is " + month);
    if (month <=2 || month == 12) {
        alert("winter");
    } else if (month <= 5 ) {
        alert("spring");
    } else if ( month <= 8) {
        alert("summer");
    } else {
        alert("autumn");
    }
}
function twnttoask() {
    var lang = prompt("input language(en,ru)");
    var day = new Date().getDay();
    var curDay;
    if (lang == "ru") {
        switch (day) {
            case 0:
                curDay = "Воскресенье";
                break;
            case 1:
                curDay = "Понедельник";
                break;
            case 2:
                curDay = "Вторник";
                break;
            case 3:
                curDay = "Среда";
                break;
            case 4:
                curDay = "Четверг";
                break;
            case 5:
                curDay = "Пятница";
                break;
            case 6:
                curDay = "Суббота";
                break;
        }
        alert("Сегодня " + curDay);
    } else if (lang == "en") {
        switch (day) {
            case 0:
                curDay = "Sunday";
                break;
            case 1:
                curDay = "Monday";
                break;
            case 2:
                curDay = "Tusday";
                break;
            case 3:
                curDay = "Wednesday";
                break;
            case 4:
                curDay = "Thursday";
                break;
            case 5:
                curDay = "Friday";
                break;
            case 6:
                curDay = "Saturday";
                break;
        }
        alert("Today is " + curDay);
    } else {
        alert("wrong language")
    }

}
function twntthrtask() {
    var x = +prompt("Input number tag"), y = +prompt("Input number selectors"), z = +prompt("Input number attributes"), m;
    m = +Math.min(x, y, z)
    if (x == y || x == z || y == z) {

        alert("there are several same and the min = " + m)
    } else
        switch (m) {
            case (x):
                alert("x is the min = " + x);
                break;
            case (y):
                alert("y is min = " + y);
                break;
            case (z):
                alert("z is min = " + z);
                break;
            default:
                alert("there are several same and the min  = " + m)
        }
}
















/* input selected image into div


function tenthTask() {
    var x = prompt("test");
    img = {
        src: x,
        alt: '',
        style: 'border: 1px solid #ccc',
        width: '200',

    }
    console.log(img);

}


function eleventhTask() {
    $("div.image").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);
    $("img").attr("style", img.style);
    $("img").attr("width", img.width);

}

*/