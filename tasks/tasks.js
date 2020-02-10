function createIframe (elClass, params) {
    if ($("div." + elClass).find('iframe').length) {
        return;
    }

    const iframeEl = document.createElement('iframe');
    iframeEl.src = params.src;
    iframeEl.title = params.title;
    iframeEl.allow = params.allow;
    iframeEl.style = params.style;
    iframeEl.sandbox = params.sandbox;
    $("div." + elClass).append(iframeEl);
    $("div." + elClass)
        .parent()
        .siblings()
        .find('iframe')
        .remove();
}
function createFirstIframe () {
    const iframeData = {
        src: "https://codesandbox.io/s/greettask-d0clf?fontsize=14&&module=%2Findex.html&hidenavigation=1&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe', iframeData);
}
function createSecondIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/csstask-qf18c?fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe2', iframeData);
}
function createThirdIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/correct1-dmtm5?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe3', iframeData);
}
function createFourthIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/correct2-slsph?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe4', iframeData);
}
<<<<<<< Updated upstream
=======
function example0() {
    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();
    let img1 = new Image();
    img1.src = 'Screenshot_0.png';
    img1.alt = '';
    $(".example0").append("<img>");
    $("img").attr("src", img1.src);
    $("img").attr("alt", img1.alt);

}
>>>>>>> Stashed changes
function createFifthIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe5', iframeData);
}

function example1() {
<<<<<<< Updated upstream
=======
    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();

>>>>>>> Stashed changes
    let img = new Image();
    img.src = 'Screenshot_1.png';
    img.alt = '';
    $("div.example1").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);
<<<<<<< Updated upstream
    $("div.example1").remove("a");
=======
}
function createSixthIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/3-table-xfotm?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe6', iframeData);
}
function example2() {

    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();
    let img = new Image();
    img.src = 'Screenshot_2.png';
    img.alt = '';
    $("div.example2").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);

}
function createSeventhIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/tablehard-cofdt?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe7', iframeData);
}
function example3() {

    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();
    let img = new Image();
    img.src = 'Screenshot_3.png';
    img.alt = '';
    $("div.example3").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);

}
function createEightsIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flag-vj92d?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe8', iframeData);
}
function example4() {

    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();

    let img = new Image();
    img.src = 'Screenshot_4.png';
    img.alt = '';
    $("div.example4").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);

}
function createNinethIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/3pages-97y8f?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe9', iframeData);
}
function createTenthIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/float-mfutz?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframef', iframeData);
}
function example5() {

    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();

    let img = new Image();
    img.src = 'Screenshot_5.png';
    img.alt = '';
    $("div.example5").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);

}
function createEleventhIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/cssnavbar-fitvg?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe11', iframeData);
}
function createTvelveIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/userform-8ziy9?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
>>>>>>> Stashed changes


}

<<<<<<< Updated upstream
=======
    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();

    let img = new Image();
    img.src = 'Screenshot_6.png';
    img.alt = '';
    $("div.example6").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);
>>>>>>> Stashed changes



<<<<<<< Updated upstream
function eleventhTask() {
    $("div.image").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);
    $("img").attr("style", img.style);
    $("img").attr("width", img.width);

}


function createSixthIframe () {
=======
    $( ".example0 img, .example1 img, .example2 img, .example3 img, .example4 img, .example5 img, .example6 img, .example7 img, .example8 img, .example9 img, .example10 img " ).remove();

    let img = new Image();
    img.src = 'Screenshot_7.png';
    img.alt = '';
    $("div.example7").append("<img>");
    $("img").attr("src", img.src);
    $("img").attr("alt", img.alt);
}

function createFiftinIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe15', iframeData);
}
function createSixteenIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe16', iframeData);
}
function createSeventeenIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe17', iframeData);
}
function createEighteenIframe () {
>>>>>>> Stashed changes
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe6', iframeData);
}
function createSeventhIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe7', iframeData);
}
function createEightsIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe8', iframeData);
}
function createNinethIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }
    createIframe('iframe9', iframeData);
}
function createTenthIframe () {
    const iframeData = {
        src: "https://codesandbox.io/embed/flamboyant-rubin-txopb?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.html&theme=dark",
        title: "flamboyant-rubin-txopb",
        allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
        style:"width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;",
        sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    }

    createIframe('iframe10', iframeData);
}




