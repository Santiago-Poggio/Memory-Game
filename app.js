document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'isaac',
            img: 'isaac.png'
        },
        {
            name: 'godhead',
            img: 'godhead.png'
        },
        {
            name: 'henry',
            img: 'henry.png'
        },
        {
            name: 'link',
            img: 'link.png'
        },
        {
            name: 'mario',
            img: 'mario.png'
        },
        {
            name: 'radio',
            img: 'radio.png'
        },
        {
            name: 'isaac',
            img: 'isaac.png'
        },
        {
            name: 'godhead',
            img: 'godhead.png'
        },
        {
            name: 'henry',
            img: 'henry.png'
        },
        {
            name: 'link',
            img: 'link.png'
        },
        {
            name: 'mario',
            img: 'mario.png'
        },
        {
            name: 'radio',
            img: 'radio.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src','persona.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'persona.png')
            cards[optionTwoId].setAttribute('src', 'persona.png')
            alert('¡Clickeaste la misma imagen!')
        }

        else if (cardsChosen[0] === cardsChosen[1]) {
            alert("¡Felicidades, encontraste las dos cartas!")
            cards[optionOneId].setAttribute('src', 'blanco.png')
            cards[optionTwoId].setAttribute('src', 'blanco.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'persona.png')
            cards[optionTwoId].setAttribute('src', 'persona.png')
            alert('Perdon, intenta de vuelta')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = '¡Felicidades, ganaste!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})