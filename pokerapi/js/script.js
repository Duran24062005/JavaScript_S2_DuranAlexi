class BlackjackGame {
  constructor() {
    this.deckId = null
    this.playerHand = []
    this.dealerHand = []
    this.gameActive = false
    this.wins = Number.parseInt(localStorage.getItem("blackjack-wins") || "0")
    this.losses = Number.parseInt(localStorage.getItem("blackjack-losses") || "0")

    this.initializeElements()
    this.updateScoreboard()
    this.bindEvents()
  }

  initializeElements() {
    this.elements = {
      newGameBtn: document.getElementById("new-game-btn"),
      hitBtn: document.getElementById("hit-btn"),
      standBtn: document.getElementById("stand-btn"),
      playerHand: document.getElementById("player-hand"),
      dealerHand: document.getElementById("dealer-hand"),
      playerScore: document.getElementById("player-score"),
      dealerScore: document.getElementById("dealer-score"),
      gameMessage: document.getElementById("game-message"),
      loading: document.getElementById("loading"),
      wins: document.getElementById("wins"),
      losses: document.getElementById("losses"),
    }
  }

  bindEvents() {
    this.elements.newGameBtn.addEventListener("click", () => this.startNewGame())
    this.elements.hitBtn.addEventListener("click", () => this.playerHit())
    this.elements.standBtn.addEventListener("click", () => this.playerStand())
  }

  async startNewGame() {
    this.showLoading(true)
    this.clearMessage()

    try {
      // Crear un nuevo mazo barajado
      const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      const data = await response.json()
      this.deckId = data.deck_id

      // Reiniciar el juego
      this.playerHand = []
      this.dealerHand = []
      this.gameActive = true

      // Limpiar las manos
      this.elements.playerHand.innerHTML = ""
      this.elements.dealerHand.innerHTML = ""

      // Repartir cartas iniciales
      await this.dealInitialCards()

      // Activar botones
      this.elements.hitBtn.disabled = false
      this.elements.standBtn.disabled = false
      this.elements.newGameBtn.disabled = true

      this.showLoading(false)
    } catch (error) {
      console.error("Error al iniciar el juego:", error)
      this.showMessage("Error al conectar con el servidor de cartas", "message-lose")
      this.showLoading(false)
    }
  }

  async dealInitialCards() {
    // Sacar 4 cartas del mazo
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=4`)
    const data = await response.json()

    if (data.success) {
      // Repartir 2 cartas al jugador
      this.playerHand.push(data.cards[0])
      this.playerHand.push(data.cards[1])

      // Repartir 2 cartas a la casa (una boca abajo)
      this.dealerHand.push(data.cards[2])
      this.dealerHand.push(data.cards[3])

      // Mostrar las cartas
      this.renderHands(true) // true = ocultar primera carta del dealer
      this.updateScores(true)

      // Verificar blackjack natural
      if (this.calculateHandValue(this.playerHand) === 21) {
        await this.playerStand()
      }
    }
  }

  async playerHit() {
    if (!this.gameActive) return

    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
      const data = await response.json()

      if (data.success) {
        this.playerHand.push(data.cards[0])
        this.renderHands(true)
        this.updateScores(true)

        const playerValue = this.calculateHandValue(this.playerHand)
        if (playerValue > 21) {
          this.endGame("¡Te pasaste! La casa gana", "message-lose")
          this.losses++
          this.updateScoreboard()
        }
      }
    } catch (error) {
      console.error("Error al pedir carta:", error)
    }
  }

  async playerStand() {
    if (!this.gameActive) return

    // Mostrar todas las cartas del dealer
    this.renderHands(false)
    this.updateScores(false)

    // La casa debe pedir cartas hasta llegar a 17 o más
    while (this.calculateHandValue(this.dealerHand) < 17) {
      try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        const data = await response.json()

        if (data.success) {
          this.dealerHand.push(data.cards[0])
          await this.delay(1000) // Pausa dramática
          this.renderHands(false)
          this.updateScores(false)
        }
      } catch (error) {
        console.error("Error en turno del dealer:", error)
        break
      }
    }

    // Determinar ganador
    this.determineWinner()
  }

  determineWinner() {
    const playerValue = this.calculateHandValue(this.playerHand)
    const dealerValue = this.calculateHandValue(this.dealerHand)

    if (dealerValue > 21) {
      this.endGame("¡La casa se pasó! ¡Ganaste!", "message-win")
      this.wins++
    } else if (playerValue > dealerValue) {
      this.endGame("¡Ganaste!", "message-win")
      this.wins++
    } else if (dealerValue > playerValue) {
      this.endGame("La casa gana", "message-lose")
      this.losses++
    } else {
      this.endGame("¡Empate!", "message-tie")
    }

    this.updateScoreboard()
  }

  calculateHandValue(hand) {
    let value = 0
    let aces = 0

    for (const card of hand) {
      if (card.value === "ACE") {
        aces++
        value += 11
      } else if (["KING", "QUEEN", "JACK"].includes(card.value)) {
        value += 10
      } else {
        value += Number.parseInt(card.value)
      }
    }

    // Ajustar ases si es necesario
    while (value > 21 && aces > 0) {
      value -= 10
      aces--
    }

    return value
  }

  renderHands(hideDealerFirstCard = false) {
    // Renderizar mano del jugador
    this.elements.playerHand.innerHTML = ""
    this.playerHand.forEach((card) => {
      const cardElement = this.createCardElement(card)
      this.elements.playerHand.appendChild(cardElement)
    })

    // Renderizar mano del dealer
    this.elements.dealerHand.innerHTML = ""
    this.dealerHand.forEach((card, index) => {
      let cardElement
      if (hideDealerFirstCard && index === 0) {
        cardElement = this.createCardBack()
      } else {
        cardElement = this.createCardElement(card)
      }
      this.elements.dealerHand.appendChild(cardElement)
    })
  }

  createCardElement(card) {
    const cardDiv = document.createElement("div")
    cardDiv.className = "card"

    const img = document.createElement("img")
    img.src = card.image
    img.alt = `${card.value} of ${card.suit}`
    img.style.width = "100%"
    img.style.height = "100%"
    img.style.borderRadius = "8px"

    cardDiv.appendChild(img)
    return cardDiv
  }

  createCardBack() {
    const cardDiv = document.createElement("div")
    cardDiv.className = "card card-back"
    cardDiv.textContent = "🂠"
    cardDiv.style.fontSize = "2rem"
    return cardDiv
  }

  updateScores(hideDealerFirstCard = false) {
    const playerValue = this.calculateHandValue(this.playerHand)
    this.elements.playerScore.textContent = playerValue

    if (hideDealerFirstCard && this.dealerHand.length > 0) {
      // Solo mostrar el valor de la segunda carta y siguientes
      const visibleCards = this.dealerHand.slice(1)
      const visibleValue = this.calculateHandValue(visibleCards)
      this.elements.dealerScore.textContent = visibleValue
    } else {
      const dealerValue = this.calculateHandValue(this.dealerHand)
      this.elements.dealerScore.textContent = dealerValue
    }
  }

  updateScoreboard() {
    this.elements.wins.textContent = this.wins
    this.elements.losses.textContent = this.losses

    // Guardar en localStorage
    localStorage.setItem("blackjack-wins", this.wins.toString())
    localStorage.setItem("blackjack-losses", this.losses.toString())
  }

  endGame(message, messageClass) {
    this.gameActive = false
    this.showMessage(message, messageClass)

    // Desactivar botones de juego
    this.elements.hitBtn.disabled = true
    this.elements.standBtn.disabled = true
    this.elements.newGameBtn.disabled = false
  }

  showMessage(message, className = "") {
    this.elements.gameMessage.textContent = message
    this.elements.gameMessage.className = `game-message ${className}`
  }

  clearMessage() {
    this.elements.gameMessage.textContent = ""
    this.elements.gameMessage.className = "game-message"
  }

  showLoading(show) {
    if (show) {
      this.elements.loading.classList.remove("hidden")
    } else {
      this.elements.loading.classList.add("hidden")
    }
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// Inicializar el juego cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  new BlackjackGame()
})
