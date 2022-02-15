window.onload = function () {

    // backgroundColor

    function setBackgroundColor(color) {
        let body = document.querySelector('body');
        body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    let backgroundColorButtons = document.querySelectorAll('#background-color>button');
    for (let i = 0; i < backgroundColorButtons.length; i += 1) {
        backgroundColorButtons[i].addEventListener('click', function (event) {
            setBackgroundColor(event.target.innerHTML);
        })
    }

    let savedBackgroundColor = localStorage.getItem('backgroundColor');
    document.body.style.backgroundColor = savedBackgroundColor;


    // fontColor

    function setFontColor(color) {
        let text = document.querySelector('p');
        text.style.color = color;
        localStorage.setItem('fontColor', color);
    }

    let fontColorButtons = document.querySelectorAll('#font-color>button');
    for (let i = 0; i < fontColorButtons.length; i += 1) {
        fontColorButtons[i].addEventListener('click', function (event) {
            setFontColor(event.target.innerHTML);
        })
    }

    let savedFontColor = localStorage.getItem('fontColor');
    document.querySelector('p').style.color = savedFontColor;


    // fontSize


    function setFontSize(size) {
        let text = document.querySelector('p');
        text.style.fontSize = size;
        localStorage.setItem('fontSize', size);
    }

    let fontSizeInput = document.querySelector('input[name="input-font-size"]')
    fontSizeInput.addEventListener('input', function (event) {
        setFontSize(`${fontSizeInput.value}px`)
    })

    let savedFontSize = localStorage.getItem('fontSize');
    document.querySelector('p').style.fontSize = savedFontSize;
}