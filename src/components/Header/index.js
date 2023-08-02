import {
  HeaderContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ScoreHeading,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <ItemsContainer>
        <Heading>
          Rock <br /> Paper <br /> Scissors
        </Heading>
      </ItemsContainer>
      <ScoreCardContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreValue>{score}</ScoreValue>
      </ScoreCardContainer>
    </HeaderContainer>
  )
}

export default Header
