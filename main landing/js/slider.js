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
            case 0:
                $('.inner').append('<p>немного текста о первом человеке</p>');
                break;
            case 1:
                $('.inner').append('<p>немного текста о selectors человеке</p>');
                break;
            case 2:
                $('.inner').append('<p>немного текста о attributes человеке</p>');
                break;
            case 3:
                $('.inner').append('<p>немного текста о layout человеке</p>');
                break;
            case 4:
                $('.inner').append('<p>немного текста о JS человеке</p>');
                break;
            case 5:
                $('.inner').append('<p>немного текста о tasks человеке</p>');
                break;
            case 6:
                $('.inner').append('<p>немного текста о 7 человеке</p>');
                break;
            case 7:
                $('.inner').append('<p>немного текста о 8 человеке</p>');
                break;
            case 8:
                $('.inner').append('<p>немного текста о 9 человеке</p>');
                break;
            case 9:
                $('.inner').append('<p>немного текста о 10 человеке</p>');
                break;
            case 10:
                $('.inner').append('<p>немного текста о 11 человеке</p>');
                break;
            case 11:
                $('.inner').append('<p>немного текста о 12 человеке</p>');
                break;
            case 12:
                $('.inner').append('<p>немного текста о 13 человеке</p>');
                break;
            case 13:
                $('.inner').append('<p>немного текста о 14 человеке</p>');
                break;
            case 14:
                $('.inner').append('<p>немного текста о 15 человеке</p>');
                break;
            case 15:
                $('.inner').append('<p>немного текста о 16 человеке</p>');
                break;
}
    } else {

        offset = 0;

    }
    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    } else {
        step++;
    }

}