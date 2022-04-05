import React from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        return(
            <div className="contentsDiv">
                {conteudos.map((element) => (
                    <div key={element.conteudo} className="card">
                        <h5>{`O conteúdo é: ${element.conteudo}`}</h5>
                        <p>{`Status: ${element.status}`}</p>
                        <p>{`Bloco: ${element.bloco}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content