import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'
import GameSelection from '../GameSelection'

import {
  AppContainer,
  RulesView,
  PopupView,
  RulesImg,
  Button,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isShow: true,
    text: 'YOU',
    imageData: [choicesList[0], choicesList[1]],
  }

  getResult = (ch1, ch2) => {
    if (ch1.id === 'ROCK') {
      switch (ch2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (ch1.id === 'PAPER') {
      switch (ch2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (ch2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state

    const choice1 = choicesList.filter(each => each.id === id)

    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]

    console.log(choice1)
    const result = this.getResult(choice1[0], choice2)

    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      score: newScore,
      text: result,
      imageData: [choice1[0], choice2],
    })
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, isShow, text, imageData} = this.state

    return (
      // eslint-disable-next-line
      <AppContainer>
        <Header score={score} />
        <GameSelection
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          imageData={imageData}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
        <RulesView>
          <Popup modal trigger={<Button type="button">Rules</Button>}>
            {close => (
              <>
                <PopupView>
                  <Button type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </Button>

                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupView>
              </>
            )}
          </Popup>
        </RulesView>
      </AppContainer>
    )
  }
}

export default Game
