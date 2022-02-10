function backColor(element, color) {
    element.style.background = color;
}

backColor(document.querySelector('#container'), 'gray')
backColor(document.querySelector('#header-container'), 'green')
backColor(document.querySelector('.emergency-tasks'), 'red')
backColor(document.querySelector('.no-emergency-tasks'), 'blue')
backColor(document.getElementById('footer-container'), 'black')
backColor(document.querySelector('.emergency-tasks h3'), 'black')
backColor(document.querySelector('.no-emergency-tasks h3'), 'black')