function newtask() {
    var achar, bchar, cchar;
    achar = prompt('input value1 ');
    bchar = prompt('input value2 ');
    cchar = prompt('input value3 ');

    achar = +achar;
    bchar = +bchar;
    cchar = +cchar;

    console.log(achar, bchar, cchar);
    alert(+achar + " " + bchar + " " + cchar);

    var summ;


    summ = +achar + bchar + cchar;

    console.log(summ);
    alert(+summ);

    var avg;

    avg = (achar + bchar + cchar) / 3;

    console.log(avg);
    alert('srednee   ' + avg);

    console.log('max' + Math.max(achar, bchar, cchar));
    alert('Max ' + Math.max(achar, bchar, cchar));
    var minim = +Math.min(achar, bchar, cchar);
    console.log('min' + Math.min(achar, bchar, cchar));
    alert('Min ' + Math.min(achar, bchar, cchar));

    var summ2;

    summ2 = +summ * 100 / 50;

    console.log('summa umnozit na 100 padelit na 50        ' + summ2);
    alert('summ x 100_ /_na_50 ravno =        ' + summ2);

    var pr;

    pr = (+achar * bchar * cchar);

    console.log('proizvedenie       ' + pr);
    alert('proizvedenie =        ' + pr);


    var c;
    var d;

    c = +summ / 2;
    d = Math.round(c);

    console.log('proverka na chet/nechet          ' + c + d);
    if (c == d) {
        alert('chet           ')
    } else {
        alert('nechet       ')
    }


    if (achar == achar / 2 * 2 && bchar == bchar / 2 * 2 && cchar == cchar / 2 * 2) {

        alert('cifra')

    } else
        alert('bukva')

    let str = summ;

    for (let i = 0; i <= 4; i++) {
        str = str * 2;
        console.log(str);
        alert(str)
    }
    for (let i = minim; i > 0; i--) {


        console.log('i', i);
    }

}






function wtf() {
    let sum = 0;
    let arr = [];
    while (true) {
        let value = +prompt("Введите число", '');
        console.log(value);
        if (value){
            arr.push(value);
        console.log(arr);}
        else if(isNaN(value))
            alert('NICHO');
        else
        break;

    }
    alert( 'Сумма: ' + sum );
    alert(arr);
}









