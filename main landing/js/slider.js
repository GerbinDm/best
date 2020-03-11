let line = document.querySelector('.line');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray= [0];
let lineWidth =0;
let offset=0;
let step=0;
let div =0;
console.log(sliderWidth);

for (let i = 0; i<slides.length; i++){
    widthArray.push(slides[i].offsetWidth);
    lineWidth +=slides[i].offsetWidth;
}

line.style.width = lineWidth+'px';
console.log(widthArray);

line.onclick=function () {
    div = lineWidth - sliderWidth - (offset + widthArray[step]);

    if (div >= 1) {
        $('.inner').empty();

        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
console.log(div)
        console.log(step)
        switch (step) {

            case 1:
                $('.inner').append('<p>Сашка</p>');
                break;
            case 2:
                $('.inner').append('<p>Димка</p>');
                break;
            case 3:
                $('.inner').append('<p>Стас!</p>');
                break;
            case 4:
                $('.inner').append('<p>Серега</p>');
                break;
            case 5:
                $('.inner').append('<p>Марина</p>');
                break;
            case 6:
                $('.inner').append('<p>Рома</p>');
                break;
            case 7:
                $('.inner').append('<p>еще один Серега</p>');
                break;
            case 8:
                $('.inner').append('<p>Влад</p>');
                break;
            case 9:
                $('.inner').append('<p>Свят</p>');
                break;
            case 10:
                $('.inner').append('<p>Ира</p>');
                break;
            case 11:
                $('.inner').append('<p>Ветал</p>');
                break;
            case 12:
                $('.inner').append('<p>Рыжая</p>');
                break;
            case 13:
                $('.inner').append('<p>Оля</p>');
                break;
            case 14:
                $('.inner').append('<p>Ниакого</p>');
                break;
            case 15:
            $('.inner').append('<p>Регина</p>');
            break;
            case 16:
                $('.inner').append('<p>Андрей</p>');
                break;
}
    } else {

        offset = 0;

    }
    if (step + 1 == slides.length-1) {
        step = 1;
        offset = 1;
    } else {
        step++;
    }

}