        // Ex. 1
        
        let p1 = document.getElementsByTagName('p')[1];
        p1.innerText = "Quero ser um engenheiro de software";

        // Ex. 2 and 3

        function changeBackColor(element, color) {
            element.style.background = color;
        }

        changeBackColor(document.getElementsByClassName('main-content')[0], 'rgb(76,164,109)')

        changeBackColor(document.querySelector('.main-content .center-content'), 'white')

        // Ex. 4

        function changeTextContent(element, text) {
            element.innerText = text;
        }

        changeTextContent(document.querySelector('h1'), 'Exercício 5.1 - JavaScript');

        // Ex. 5

        let paragraphs = document.querySelectorAll('p');

        function upperCase(element) {
            for (let index = 0; index < paragraphs.length; index += 1){
                element[index].style.textTransform = 'uppercase';
            }
        }

        upperCase(paragraphs);

        // Ex. 6

        function callConsole(element) {
            for (let index = 0; index < paragraphs.length; index += 1){
                console.log(element[index]);
            }
        }

        callConsole(paragraphs);