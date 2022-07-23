import React from 'react'
import Card from './Card';

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default function Cards({increaseAnswered}) {
    const cards = [
        {
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta: "O React é __ ",
            resposta: "Uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com __",
            resposta: "Letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "Expressões"
        },
        {
            pergunta: "O ReactDOM nos ajuda __ ",
            resposta: "Interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para __ ",
            resposta: "Gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta: "Usamos props para __",
            resposta: "Passar diferentes informações para componentes"
        },
        {
            pergunta: "Usamos estado (state) para __",
            resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    const shuffledCards = shuffle(cards);
    
    return (
        <div class="cards">
            {
                shuffledCards.map((card, key) => (
                    <Card card={card} index={key} increaseAnswered={increaseAnswered} />
                ))
            }
        </div>
    )
}