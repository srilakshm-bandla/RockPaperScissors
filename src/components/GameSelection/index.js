import {
  GameSelectionContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './styledComponents'

const GameSelection = props => {
  const {choicesList, isShow, text, imageData, checkResult, restartGame} = props

  const showGame = () => (
    <GameSelectionContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={imageData[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={imageData[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <ResultButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </ResultButton>
          </ResultImageContainer>
        </>
      )}
    </GameSelectionContainer>
  )

  return showGame()
}

export default GameSelection
