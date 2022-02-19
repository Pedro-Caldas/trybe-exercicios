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


    // fontFamily


    function setFontFamily(family) {
        let text = document.querySelector('p');
        text.style.fontFamily = family;
        localStorage.setItem('fontFamily', family)
    }

    let fontFamilyButtons = document.querySelectorAll('#font-family>button');
    for (let i = 0; i < fontFamilyButtons.length; i += 1) {
        fontFamilyButtons[i].addEventListener('click', function (event) {
            setFontFamily(event.target.innerHTML);
        })
    }

    let savedFontFamily = localStorage.getItem('fontFamily');
    document.querySelector('p').style.fontFamily = savedFontFamily;




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

    let fontSizeInput = document.querySelector('input[name="input-font-size"]');
    fontSizeInput.addEventListener('input', function (event) {
        setFontSize(`${fontSizeInput.value}px`)
    })

    let savedFontSize = localStorage.getItem('fontSize');
    document.querySelector('p').style.fontSize = savedFontSize;


    // lineSpacing


    function setLineSpace(space) {
        let text = document.querySelector('p');
        text.style.lineHeight = space;
        localStorage.setItem('lineSpacing', space);
    }

    let inputLineSpacing = document.querySelector('input[name="input-line-space"]');
    inputLineSpacing.addEventListener('change', function (event) {
        setLineSpace(inputLineSpacing.value)
    })

    let savedLineSpacing = localStorage.getItem('lineSpacing');
    document.querySelector('p').style.lineHeight = savedLineSpacing;

}